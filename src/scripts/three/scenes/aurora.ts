// Global background: fullscreen quad running a domain-warped fbm shader —
// the cyan-on-black "atmosphere" behind every page. All the cost is in the
// fragment shader, so pixel-ratio capping in the engine is what bounds it.
import {
  Scene,
  PerspectiveCamera,
  PlaneGeometry,
  ShaderMaterial,
  Mesh,
  Vector2,
} from "three";
import type { FrameState, SectionScene } from "../engine";

const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uPointer;
  uniform vec2 uResolution;

  // 2D value-noise + fbm (cheap, no texture lookups)
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }
  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }
  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p = p * 2.03 + vec2(17.0, 9.0);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution;
    vec2 p = uv * vec2(uResolution.x / uResolution.y, 1.0) * 1.6;
    float t = uTime * 0.03;

    // Domain warp: fbm fed by fbm — the "flowing ink" look.
    vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
    vec2 r = vec2(
      fbm(p + 3.0 * q + vec2(1.7, 9.2) + t * 0.7),
      fbm(p + 3.0 * q + vec2(8.3, 2.8) - t * 0.4)
    );
    float f = fbm(p + 3.0 * r + uPointer * 0.6);

    // Scroll drifts the palette from deep cyan toward teal/violet so each
    // section of the page gets a slightly different atmosphere.
    vec3 cyan = vec3(0.0, 0.898, 1.0);
    vec3 deep = vec3(0.02, 0.16, 0.28);
    vec3 violet = vec3(0.35, 0.25, 0.85);
    vec3 tint = mix(cyan, violet, uScroll * 0.55);

    float intensity = smoothstep(0.35, 0.95, f);
    vec3 col = mix(vec3(0.0), deep, intensity * 0.9);
    col += tint * pow(intensity, 3.0) * 0.55;

    // Vignette keeps edges dark so content panels stay readable.
    float vig = smoothstep(1.25, 0.35, length(uv - 0.5));
    col *= vig;

    // Alpha so the site's own background color shows through the quiet areas.
    gl_FragColor = vec4(col, intensity * 0.85 * vig);
  }
`;

export function createAurora(lite: boolean): SectionScene {
  const scene = new Scene();
  const camera = new PerspectiveCamera(70, 1, 0.1, 10);

  const material = new ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uPointer: { value: new Vector2(0, 0) },
      uResolution: { value: new Vector2(1, 1) },
    },
  });
  scene.add(new Mesh(new PlaneGeometry(2, 2), material));

  const speed = lite ? 0.7 : 1;

  return {
    scene,
    camera,
    update(state: FrameState) {
      const u = material.uniforms;
      u.uTime.value = state.elapsed * speed;
      u.uScroll.value = state.scroll;
      u.uPointer.value.set(state.pointer.x, -state.pointer.y);
      // gl_FragCoord is in device pixels — match it or the pattern zooms
      // and the vignette collapses on high-DPR screens.
      u.uResolution.value.set(
        window.innerWidth * state.dpr,
        window.innerHeight * state.dpr,
      );
    },
  };
}
