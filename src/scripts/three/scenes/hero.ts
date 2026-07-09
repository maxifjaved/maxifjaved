// Hero: particle morph. Points scatter in a cloud, coalesce into a "</>"
// glyph (sampled from an offscreen 2D canvas), drift with noise, repel from
// the pointer, and disperse again as the hero scrolls out of view.
import {
  Scene,
  PerspectiveCamera,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  Points,
  AdditiveBlending,
  Vector2,
} from "three";
import type { FrameState, SectionScene } from "../engine";

const vertexShader = /* glsl */ `
  attribute vec3 aTarget;
  attribute float aRand;
  uniform float uTime;
  uniform float uProgress;
  uniform vec2 uPointer;
  uniform float uPointerOn;

  varying float vAlpha;

  void main() {
    // Each particle keeps its own phase so the cloud never moves in lockstep.
    vec3 drift = vec3(
      sin(uTime * 0.6 + aRand * 40.0),
      cos(uTime * 0.5 + aRand * 55.0),
      sin(uTime * 0.4 + aRand * 70.0)
    ) * mix(1.6, 0.28, uProgress);

    vec3 pos = mix(position, aTarget, uProgress) + drift;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Pointer repulsion in NDC space — cheap and camera-agnostic.
    vec2 ndc = gl_Position.xy / gl_Position.w;
    vec2 away = ndc - uPointer;
    float push = smoothstep(0.4, 0.0, length(away)) * uPointerOn;
    gl_Position.xy += normalize(away + 0.0001) * push * 0.18 * gl_Position.w;

    gl_PointSize = (2.6 + aRand * 2.2) * (28.0 / -mvPosition.z);
    vAlpha = mix(0.35, 0.9, uProgress) * (0.5 + aRand * 0.5);
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;
  varying float vAlpha;

  void main() {
    // Soft round sprite, brighter core.
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float glow = smoothstep(0.5, 0.05, d);
    vec3 col = mix(vec3(0.0, 0.55, 0.75), vec3(0.49, 0.93, 1.0), glow);
    gl_FragColor = vec4(col, glow * vAlpha);
  }
`;

/** Sample opaque pixels of a "</>" glyph drawn on an offscreen 2D canvas. */
function sampleGlyph(count: number, offsetX: number): Float32Array {
  const w = 320;
  const h = 160;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.fillStyle = "#fff";
  g.font = `700 120px 'Space Grotesk', monospace`;
  g.textAlign = "center";
  g.textBaseline = "middle";
  g.fillText("</>", w / 2, h / 2);

  const data = g.getImageData(0, 0, w, h).data;
  const filled: number[] = [];
  for (let y = 0; y < h; y += 2) {
    for (let x = 0; x < w; x += 2) {
      if (data[(y * w + x) * 4 + 3] > 128) filled.push(x, y);
    }
  }

  const targets = new Float32Array(count * 3);
  const scale = 0.12; // canvas px -> world units
  if (filled.length === 0) {
    // Text rendering failed (blocked canvas/fonts) — fall back to a ring.
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      targets[i * 3] = Math.cos(a) * 12 + offsetX;
      targets[i * 3 + 1] = Math.sin(a) * 12;
      targets[i * 3 + 2] = (Math.random() - 0.5) * 3;
    }
    return targets;
  }
  for (let i = 0; i < count; i++) {
    const j = (Math.random() * (filled.length / 2)) | 0;
    targets[i * 3] = (filled[j * 2] - w / 2) * scale + offsetX;
    targets[i * 3 + 1] = -(filled[j * 2 + 1] - h / 2) * scale;
    targets[i * 3 + 2] = (Math.random() - 0.5) * 3;
  }
  return targets;
}

export function createHero(lite: boolean): SectionScene {
  const scene = new Scene();
  const camera = new PerspectiveCamera(70, 1, 0.1, 100);
  camera.position.z = 30;

  const COUNT = lite ? 2500 : 6000;
  // Desktop: glyph sits right-of-center, behind/around the portrait; the text
  // column keeps clear space. Mobile stacks, so center it.
  const targets = sampleGlyph(COUNT, lite ? 0 : 7);

  const scatter = new Float32Array(COUNT * 3);
  const rand = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    scatter[i * 3] = (Math.random() - 0.5) * 70;
    scatter[i * 3 + 1] = (Math.random() - 0.5) * 45;
    scatter[i * 3 + 2] = (Math.random() - 0.5) * 25;
    rand[i] = Math.random();
  }

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(scatter, 3));
  geometry.setAttribute("aTarget", new BufferAttribute(targets, 3));
  geometry.setAttribute("aRand", new BufferAttribute(rand, 1));

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uProgress: { value: 0 },
      uPointer: { value: new Vector2(0, 0) },
      uPointerOn: { value: lite ? 0 : 1 },
    },
  });

  const points = new Points(geometry, material);
  scene.add(points);

  let intro = 0;

  return {
    scene,
    camera,
    update(state: FrameState, progress: number) {
      const u = material.uniforms;
      u.uTime.value = state.elapsed;

      // Ease into the glyph after load, disperse as the hero scrolls away.
      intro = Math.min(1, intro + state.delta * 0.35);
      const eased = intro * intro * (3 - 2 * intro);
      const disperse = 1 - smoothstep(0.52, 0.8, progress);
      u.uProgress.value = eased * disperse;

      // Pointer is viewport-normalized; hero fills the top viewport, so it
      // maps closely enough to the scissored region's NDC.
      u.uPointer.value.set(state.pointer.x * 2, -state.pointer.y * 2);

      points.rotation.y = Math.sin(state.elapsed * 0.05) * 0.08;
      camera.position.x += (state.pointer.x * 3 - camera.position.x) * 0.03;
      camera.position.y += (-state.pointer.y * 3 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
    },
  };
}

function smoothstep(a: number, b: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}
