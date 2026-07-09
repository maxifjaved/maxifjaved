// Shared Three.js engine: one fixed canvas + one renderer. A global scene
// (aurora) renders full-viewport on every page; section scenes render on top,
// scissor-clipped to their host section (three.js "multiple elements" pattern).
// Loaded lazily by MainLayout only when guards pass; everything here is
// decorative — content stays plain HTML above the canvas.
import { WebGLRenderer, PerspectiveCamera, Scene } from "three";

export interface FrameState {
  /** Normalized pointer, -0.5..0.5 (stays 0 in lite mode). */
  pointer: { x: number; y: number };
  /** Lerped document scroll progress, 0..1. */
  scroll: number;
  elapsed: number;
  delta: number;
  /** Lite mode: coarse pointer or narrow viewport — reduce work. */
  lite: boolean;
  /** The renderer's effective pixel ratio (for gl_FragCoord math). */
  dpr: number;
}

export interface SectionScene {
  scene: Scene;
  camera: PerspectiveCamera;
  /** progress: how far the host section has travelled through the viewport, 0..1. */
  update(state: FrameState, progress: number): void;
}

type SceneFactory = (lite: boolean) => SectionScene;

const registry: Record<string, SceneFactory> = {};

export function registerScene(name: string, factory: SceneFactory) {
  registry[name] = factory;
}

export function startEngine(globalFactory: SceneFactory) {
  const lite =
    window.matchMedia("(pointer: coarse)").matches ||
    window.matchMedia("(max-width: 1023px)").matches;

  const canvas = document.createElement("canvas");
  canvas.className = "three-stage";
  canvas.setAttribute("aria-hidden", "true");
  document.body.prepend(canvas);

  let renderer: WebGLRenderer;
  try {
    renderer = new WebGLRenderer({ canvas, alpha: true, antialias: !lite });
  } catch (err) {
    console.warn("three.engine.init_failed", err);
    canvas.remove();
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, lite ? 1.25 : 1.5));
  renderer.autoClear = false;

  const state: FrameState = {
    pointer: { x: 0, y: 0 },
    scroll: 0,
    elapsed: 0,
    delta: 0,
    lite,
    dpr: renderer.getPixelRatio(),
  };

  const onPointer = (e: PointerEvent) => {
    state.pointer.x = e.clientX / window.innerWidth - 0.5;
    state.pointer.y = e.clientY / window.innerHeight - 0.5;
  };
  if (!lite) {
    window.addEventListener("pointermove", onPointer, { passive: true });
  }

  const globalScene = globalFactory(lite);
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("[data-scene]"),
  )
    .filter((el) => registry[el.dataset.scene!])
    .map((el) => ({ el, impl: registry[el.dataset.scene!](lite) }));

  const resize = () => {
    renderer.setSize(window.innerWidth, window.innerHeight, false);
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });

  let raf = 0;
  let running = false;
  let last = 0;

  const frame = (now: number) => {
    raf = requestAnimationFrame(frame);
    // Own timekeeping (THREE.Clock resets elapsed on restart): clamp delta so
    // elapsed keeps monotonic continuity across tab-hidden pauses.
    const t = now / 1000;
    state.delta = Math.min(Math.max(t - last, 0), 0.1);
    last = t;
    state.elapsed += state.delta;
    // Read scroll here rather than via a listener: the loop already forces
    // layout below, and occluded tabs suppress scroll events entirely.
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollTarget = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    state.scroll += (scrollTarget - state.scroll) * 0.06;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    renderer.setScissorTest(false);
    renderer.clear();
    renderer.setViewport(0, 0, vw, vh);
    globalScene.camera.aspect = vw / vh;
    globalScene.camera.updateProjectionMatrix();
    globalScene.update(state, 0);
    renderer.render(globalScene.scene, globalScene.camera);

    renderer.setScissorTest(true);
    for (const s of sections) {
      const rect = s.el.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= vh || rect.width === 0) continue;

      // 0 when the section's top enters the viewport bottom, 1 when its
      // bottom leaves the top — scenes use it for scroll choreography.
      const progress = (vh - rect.top) / (vh + rect.height);
      const bottom = vh - rect.bottom; // WebGL origin is bottom-left
      s.impl.camera.aspect = rect.width / rect.height;
      s.impl.camera.updateProjectionMatrix();
      s.impl.update(state, progress);
      renderer.setViewport(rect.left, bottom, rect.width, rect.height);
      renderer.setScissor(rect.left, bottom, rect.width, rect.height);
      renderer.render(s.impl.scene, s.impl.camera);
    }
  };

  const start = () => {
    if (running) return;
    running = true;
    last = performance.now() / 1000;
    raf = requestAnimationFrame(frame);
  };
  const stop = () => {
    if (!running) return;
    running = false;
    cancelAnimationFrame(raf);
  };

  const onVisibility = () => {
    document.hidden ? stop() : start();
  };
  document.addEventListener("visibilitychange", onVisibility);

  canvas.addEventListener("webglcontextlost", (e) => {
    e.preventDefault();
    stop();
    // Full teardown — the CSS fallback layer takes over for the session.
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", onVisibility);
    renderer.dispose();
    canvas.remove();
    document.documentElement.classList.remove("three-active");
    console.warn("three.engine.context_lost");
  });

  document.documentElement.classList.add("three-active");
  start();
}
