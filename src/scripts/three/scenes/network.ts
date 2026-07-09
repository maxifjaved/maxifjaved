// CTA: a "peer network" — icosahedron vertices as glowing nodes, edges as
// connections, breathing with noise and easing toward the pointer. The
// WebRTC metaphor: peers joining a mesh.
import {
  Scene,
  PerspectiveCamera,
  IcosahedronGeometry,
  EdgesGeometry,
  LineSegments,
  LineBasicMaterial,
  Points,
  PointsMaterial,
  BufferGeometry,
  BufferAttribute,
  AdditiveBlending,
  Group,
} from "three";
import type { FrameState, SectionScene } from "../engine";

export function createNetwork(lite: boolean): SectionScene {
  const scene = new Scene();
  const camera = new PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 26;

  const group = new Group();
  scene.add(group);

  const geo = new IcosahedronGeometry(9, lite ? 1 : 2);
  const basePositions = geo.attributes.position.array.slice() as Float32Array;

  const edges = new LineSegments(
    new EdgesGeometry(geo),
    new LineBasicMaterial({
      color: 0x00e5ff,
      transparent: true,
      opacity: 0.16,
      blending: AdditiveBlending,
      depthWrite: false,
    }),
  );

  // Deduplicated vertices as node points (raw icosahedron verts repeat).
  const seen = new Set<string>();
  const nodes: number[] = [];
  for (let i = 0; i < basePositions.length; i += 3) {
    const key = `${basePositions[i].toFixed(2)},${basePositions[i + 1].toFixed(2)},${basePositions[i + 2].toFixed(2)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    nodes.push(basePositions[i], basePositions[i + 1], basePositions[i + 2]);
  }
  const nodeGeo = new BufferGeometry();
  nodeGeo.setAttribute(
    "position",
    new BufferAttribute(new Float32Array(nodes), 3),
  );
  const points = new Points(
    nodeGeo,
    new PointsMaterial({
      color: 0x7deeff,
      size: 0.32,
      transparent: true,
      opacity: 0.85,
      blending: AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    }),
  );

  group.add(edges, points);
  group.position.x = lite ? 0 : 10;

  const edgePos = edges.geometry.attributes.position;
  const edgeBase = edgePos.array.slice() as Float32Array;
  const nodePos = nodeGeo.attributes.position;
  const nodeBase = nodePos.array.slice() as Float32Array;

  const breathe = (attr: typeof edgePos, base: Float32Array, t: number) => {
    const arr = attr.array as Float32Array;
    for (let i = 0; i < base.length; i += 3) {
      const x = base[i];
      const y = base[i + 1];
      const z = base[i + 2];
      // Radial pulse, phase-shifted around the sphere.
      const s = 1 + 0.06 * Math.sin(t * 1.2 + x * 0.35 + y * 0.5 + z * 0.4);
      arr[i] = x * s;
      arr[i + 1] = y * s;
      arr[i + 2] = z * s;
    }
    attr.needsUpdate = true;
  };

  return {
    scene,
    camera,
    update(state: FrameState) {
      const t = state.elapsed;
      breathe(edgePos, edgeBase, t);
      breathe(nodePos, nodeBase, t);
      group.rotation.y = t * 0.12 + state.pointer.x * 0.6;
      group.rotation.x = state.pointer.y * 0.4 + Math.sin(t * 0.2) * 0.1;
    },
  };
}
