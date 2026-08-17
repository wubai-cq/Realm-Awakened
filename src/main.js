import * as THREE from 'three';
import { createIcons, Pause, Play, RotateCcw } from 'lucide';
import {
  chladniValue,
  chladniVolumeValue,
} from './chladni.js';
import {
  FPS,
  SCENE_DURATION,
  TOTAL_FRAMES,
  PYRAMID_RAYS,
  getCameraPushAtTime,
  getLabelRevealAtTime,
  getSelectionAtTime,
  getSubtitleAtTime,
  getWaveState,
} from './timeline.js';
import './style.css';

const HOT_COLORS = [0xffffdc, 0xffc735, 0xff7418, 0xff2f0c, 0x8d1207];
const WAVE_COLOR = 0xb9e6ff;

const audio = document.querySelector('#narration');
const canvas = document.querySelector('#scene');
const labelsRoot = document.querySelector('#labels');
const subtitleEl = document.querySelector('#subtitle');
const captionEl = document.querySelector('#caption');
const timecodeEl = document.querySelector('#timecode');
const playButton = document.querySelector('#play');
const resetButton = document.querySelector('#reset');

createIcons({ icons: { Play, Pause, RotateCcw } });

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setClearColor(0x020407, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020407, 0.012);
const camera = new THREE.PerspectiveCamera(43, 1, 0.1, 100);
camera.position.set(0, 0.1, 12.5);
camera.lookAt(0, 0, 0);

const celestialField = new THREE.Group();
scene.add(celestialField);

async function bootstrap() {
const texture = createGaussianTexture();
const referenceCosmicWebData = await loadReferenceCosmicWeb();
const stars = createBackgroundStars();
celestialField.add(stars);

const nodeDefinitions = [
  { label: '太阳', latin: 'SUN', position: [-3.35, 1.42, 0.4], radius: 0.62, color: HOT_COLORS[1], spin: 0.42, phase: 0.2 },
  { label: '木星', latin: 'JUPITER', position: [-1.82, -1.55, 0.5], radius: 0.56, color: HOT_COLORS[2], spin: -0.36, phase: 1.2 },
  { label: '天狼星', latin: 'SIRIUS', position: [0.18, 1.72, -0.4], radius: 0.51, color: HOT_COLORS[0], spin: 0.32, phase: 2.1 },
  { label: '土星', latin: 'SATURN', position: [2.16, -1.08, 0.8], radius: 0.5, color: HOT_COLORS[2], spin: 0.29, phase: 1.6 },
  { label: '北极星', latin: 'POLARIS', position: [3.18, 1.92, -0.3], radius: 0.4, color: HOT_COLORS[0], spin: -0.25, phase: 0.4 },
  { label: '火星', latin: 'MARS', position: [1.16, 0.08, 1.05], radius: 0.42, color: HOT_COLORS[3], spin: 0.48, phase: 2.8 },
  { label: '参宿四', latin: 'BETELGEUSE', position: [-3.28, -1.9, -0.8], radius: 0.55, color: HOT_COLORS[3], spin: -0.31, phase: 2.7 },
  { label: '昴星团', latin: 'PLEIADES', position: [-0.74, 0.05, -1.22], radius: 0.5, color: HOT_COLORS[0], spin: 0.39, phase: 1.9, shape: 'chladni', modes: [2, 3] },
  { label: '金星', latin: 'VENUS', position: [-0.12, -2.55, -0.95], radius: 0.44, color: HOT_COLORS[1], spin: -0.44, phase: 0.9 },
  { label: '海王星', latin: 'NEPTUNE', position: [3.62, -2.02, 0.58], radius: 0.46, color: HOT_COLORS[2], spin: 0.35, phase: 2.4 },
  { label: '月球', latin: 'MOON', position: [-4.02, 0.05, -1.2], radius: 0.3, color: HOT_COLORS[1], spin: -0.52, phase: 1.3 },
  { label: '脉冲星', latin: 'PULSAR', position: [3.78, 0.44, -1.48], radius: 0.5, color: 0xdcecff, spin: 0.7, phase: 3.1, shape: 'chladni', modes: [2, 3, 4], boundary: 'volume', network: true },
];

const nodes = nodeDefinitions.map((definition, index) => createPlasmaNode(definition, index));
nodes.forEach((node) => celestialField.add(node.group));

const minorDefinitions = [
  { label: '织女星', latin: 'VEGA', position: [-4.35, 2.42, -1.7], scale: 0.12 },
  { label: '牛郎星', latin: 'ALTAIR', position: [-2.15, 2.68, -1.25], scale: 0.1 },
  { label: '参宿七', latin: 'RIGEL', position: [1.35, 2.55, -2.1], scale: 0.11 },
  { label: '五车二', latin: 'CAPELLA', position: [4.35, 2.35, -1.35], scale: 0.1 },
  { label: '毕宿五', latin: 'ALDEBARAN', position: [-4.55, -1.02, -1.8], scale: 0.09 },
  { label: '角宿一', latin: 'SPICA', position: [-2.28, -0.18, -2.25], scale: 0.09 },
  { label: '心宿二', latin: 'ANTARES', position: [2.82, 0.72, -1.95], scale: 0.11 },
  { label: '老人星', latin: 'CANOPUS', position: [4.24, -2.58, -1.55], scale: 0.1 },
];
const minorBodies = minorDefinitions.map((definition, index) => createMinorBody(definition, index));
minorBodies.forEach((body) => celestialField.add(body.group));

const pyramidRays = PYRAMID_RAYS.map(() => createPyramidRay());
pyramidRays.forEach((line) => celestialField.add(line));
const wave = createWavePacket();
celestialField.add(wave.group);

const labels = nodeDefinitions.map((definition) => {
  const label = document.createElement('div');
  label.className = 'node-label';
  label.innerHTML = `${definition.label}<small>${definition.latin}</small>`;
  labelsRoot.appendChild(label);
  return label;
});

const minorLabels = minorDefinitions.map((definition) => {
  const label = document.createElement('div');
  label.className = 'node-label minor-label';
  label.innerHTML = `${definition.label}<small>${definition.latin}</small>`;
  labelsRoot.appendChild(label);
  return label;
});

let isPlaying = false;
let lastFrame = -1;

function createGaussianTexture() {
  const size = 64;
  const canvas2d = document.createElement('canvas');
  canvas2d.width = size;
  canvas2d.height = size;
  const ctx = canvas2d.getContext('2d');
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.18, 'rgba(255,255,255,0.95)');
  gradient.addColorStop(0.55, 'rgba(255,255,255,0.28)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const map = new THREE.CanvasTexture(canvas2d);
  map.colorSpace = THREE.SRGBColorSpace;
  return map;
}

async function loadReferenceCosmicWeb() {
  try {
    const response = await fetch('/chladni-reference.bin');
    if (!response.ok) return null;
    return new Float32Array(await response.arrayBuffer());
  } catch (_error) {
    return null;
  }
}

function createBackgroundStars() {
  const field = new THREE.Group();
  const clusters = [
    { center: [-4.2, 1.55, -2.1], spread: [1.45, 0.85, 1.1] },
    { center: [-1.55, 0.25, -2.5], spread: [1.3, 1.25, 1.25] },
    { center: [2.15, 1.45, -2.2], spread: [1.55, 0.95, 1.2] },
    { center: [4.05, -1.15, -2.5], spread: [1.25, 1.05, 1.15] },
    { center: [-0.35, -2.15, -2.15], spread: [1.75, 0.72, 1.3] },
    { center: [-3.55, -1.8, -1.75], spread: [1.15, 0.92, 1.1] },
  ];
  let seed = 17;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const gaussian = () => {
    const u = Math.max(random(), 0.0001);
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(Math.PI * 2 * random());
  };

  [
    { count: 1050, size: 0.042, opacity: 0.56 },
    { count: 420, size: 0.078, opacity: 0.72 },
    { count: 120, size: 0.13, opacity: 0.64 },
  ].forEach((layer) => {
    const positions = [];
    const colors = [];
    for (let i = 0; i < layer.count; i += 1) {
      let x;
      let y;
      let z;
      if (random() < 0.82) {
        const cluster = clusters[Math.floor(random() * clusters.length)];
        x = cluster.center[0] + gaussian() * cluster.spread[0];
        y = cluster.center[1] + gaussian() * cluster.spread[1];
        z = cluster.center[2] + gaussian() * cluster.spread[2];
      } else {
        x = (random() * 2 - 1) * 6.2;
        y = (random() * 2 - 1) * 3.6;
        z = random() * 4.5 - 4;
      }
      positions.push(
        THREE.MathUtils.clamp(x, -6.7, 6.7),
        THREE.MathUtils.clamp(y, -3.9, 3.9),
        THREE.MathUtils.clamp(z, -5.2, 1.2),
      );
      const brightness = 0.62 + random() * 0.38;
      colors.push(brightness * 0.82, brightness * 0.88, brightness);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    field.add(new THREE.Points(geometry, new THREE.PointsMaterial({ size: layer.size, map: texture, vertexColors: true, transparent: true, opacity: layer.opacity, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true })));
  });
  return field;
}

function createPlasmaNode(definition, index) {
  if (definition.shape === 'chladni' && definition.boundary === 'volume') {
    return createVolumetricChladniNode(definition, index);
  }
  if (definition.shape === 'chladni') return createChladniNode(definition, index);
  const group = new THREE.Group();
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: definition.color, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.setScalar(definition.radius * 3.4);
  group.add(halo);

  const mantle = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: definition.color, transparent: true, opacity: 0.42, depthWrite: false, blending: THREE.AdditiveBlending }));
  mantle.scale.setScalar(definition.radius * 1.65);
  group.add(mantle);

  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: HOT_COLORS[0], transparent: true, opacity: 0.92, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.scale.setScalar(definition.radius * 0.68);
  group.add(core);

  const particleGeometry = new THREE.BufferGeometry();
  const positions = [];
  const colors = [];
  const count = 360 + (index % 4) * 60;
  const bodyColor = new THREE.Color(definition.color);
  for (let i = 0; i < count; i += 1) {
    const shell = i % 3;
    const theta = i * 2.39996323 + definition.phase;
    const phi = Math.acos(1 - 2 * ((i + 0.5) / count));
    const shellRadius = definition.radius * (0.38 + shell * 0.28 + 0.06 * Math.sin(i * 1.7 + definition.phase));
    const flatten = 0.78 + 0.18 * Math.sin(i * 0.37 + definition.phase);
    const arm = 1 + 0.12 * Math.sin(theta * 2.4 + shell);
    positions.push(
      Math.cos(theta) * Math.sin(phi) * shellRadius * arm,
      Math.cos(phi) * shellRadius * flatten,
      Math.sin(theta) * Math.sin(phi) * shellRadius * 0.68,
    );
    const shellColor = new THREE.Color(HOT_COLORS[Math.min(shell + 1, HOT_COLORS.length - 1)]).lerp(bodyColor, 0.22);
    const shade = 0.7 + 0.38 * ((Math.sin(theta * 1.7) + 1) / 2);
    colors.push(shellColor.r * shade, shellColor.g * shade, shellColor.b * shade);
  }
  particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  particleGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ size: 0.056, map: texture, vertexColors: true, transparent: true, opacity: 0.66, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  group.add(particles);

  const ringGeometry = new THREE.TorusGeometry(definition.radius * 0.88, 0.006, 4, 64);
  const ring = new THREE.Mesh(ringGeometry, new THREE.MeshBasicMaterial({ color: definition.color, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false }));
  ring.rotation.x = Math.PI * 0.45 + definition.phase * 0.1;
  ring.rotation.z = definition.phase;
  group.add(ring);

  group.position.set(...definition.position);
  group.userData = { ...definition, halo, mantle, core, particles, ring, index };
  return { group, definition };
}

function createChladniNode(definition, index) {
  const group = new THREE.Group();
  const positions = [];
  const colors = [];
  const acceptedPoints = new Map();
  const gridSize = 76;
  const threshold = 0.115;
  const [m, n] = definition.modes;
  const baseColor = new THREE.Color(definition.color);
  const hotColor = new THREE.Color(HOT_COLORS[0]);

  for (let row = 0; row < gridSize; row += 1) {
    for (let column = 0; column < gridSize; column += 1) {
      const u = (column / (gridSize - 1)) * 2 - 1;
      const v = (row / (gridSize - 1)) * 2 - 1;
      const value = chladniValue(u, v, m, n);
      if (Math.abs(value) > threshold) continue;
      const strength = 1 - Math.abs(value) / threshold;
      const jitter = Math.sin((row * 83 + column * 47 + index * 29) * 0.17) * 0.008;
      const point = [
        (u + jitter) * definition.radius * 1.25,
        (v - jitter * 0.6) * definition.radius * 1.25,
        value * definition.radius * 1.7
          + Math.sin((u - v) * Math.PI * (m + n)) * definition.radius * 0.035,
      ];
      positions.push(...point);
      acceptedPoints.set(row * gridSize + column, point);
      const color = baseColor.clone().lerp(hotColor, 0.28 + strength * 0.66);
      colors.push(color.r, color.g, color.b);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const glow = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.12, map: texture, color: definition.color, transparent: true, opacity: 0.14, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  group.add(glow);
  const pattern = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.047, map: texture, vertexColors: true, transparent: true, opacity: 0.72, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  group.add(pattern);

  let network = null;
  if (definition.network) {
    const segmentPositions = [];
    const neighbors = [[0, 1], [1, 0], [1, 1], [1, -1]];
    acceptedPoints.forEach((point, key) => {
      const row = Math.floor(key / gridSize);
      const column = key % gridSize;
      neighbors.forEach(([rowOffset, columnOffset]) => {
        const neighbor = acceptedPoints.get((row + rowOffset) * gridSize + column + columnOffset);
        if (neighbor) segmentPositions.push(...point, ...neighbor);
      });
    });
    const networkGeometry = new THREE.BufferGeometry();
    networkGeometry.setAttribute('position', new THREE.Float32BufferAttribute(segmentPositions, 3));
    network = new THREE.LineSegments(networkGeometry, new THREE.LineBasicMaterial({ color: definition.color, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending }));
    group.add(network);
  }

  const extent = definition.radius * 1.3;
  const outlinePoints = definition.boundary === 'octagon'
    ? Array.from({ length: 8 }, (_, vertex) => {
      const angle = Math.PI / 8 + vertex * Math.PI / 4;
      const radius = extent / Math.cos(Math.PI / 8);
      return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    })
    : [
      new THREE.Vector3(-extent, -extent, 0),
      new THREE.Vector3(extent, -extent, 0),
      new THREE.Vector3(extent, extent, 0),
      new THREE.Vector3(-extent, extent, 0),
    ];
  const outlineGeometry = new THREE.BufferGeometry().setFromPoints(outlinePoints);
  const outline = new THREE.LineLoop(outlineGeometry, new THREE.LineBasicMaterial({ color: definition.color, transparent: true, opacity: 0.13, depthWrite: false, blending: THREE.AdditiveBlending }));
  group.add(outline);

  group.position.set(...definition.position);
  group.userData = { ...definition, isChladni: true, pattern, glow, network, outline, index };
  return { group, definition };
}

function createVolumetricChladniNode(definition, index) {
  if (referenceCosmicWebData) return createReferenceCosmicWebNode(definition, index);
  const group = new THREE.Group();
  const positions = [];
  const colors = [];
  const networkPositions = [];
  const outlinePositions = [];
  const acceptedPoints = new Map();
  const [m, n, p] = definition.modes;
  const gridSize = 40;
  const scale = definition.radius * 1.8;
  const baseColor = new THREE.Color(definition.color);
  const shadowColor = new THREE.Color(0x71849c);
  const highlightColor = new THREE.Color(0xfff4df);
  const filamentSeeds = Array.from({ length: 18 }, (_, seed) => ({
    x: Math.sin(seed * 3.71 + 0.8) * 0.72,
    y: Math.cos(seed * 2.17 - 0.4) * 0.72,
    z: Math.sin(seed * 1.43 + 1.9) * 0.72,
  }));

  for (let xIndex = 0; xIndex < gridSize; xIndex += 1) {
    const x = (xIndex / (gridSize - 1)) * 2 - 1;
    for (let yIndex = 0; yIndex < gridSize; yIndex += 1) {
      const y = (yIndex / (gridSize - 1)) * 2 - 1;
      for (let zIndex = 0; zIndex < gridSize; zIndex += 1) {
        const z = (zIndex / (gridSize - 1)) * 2 - 1;
        const envelope = x * x * 0.62 + y * y * 0.86 + z * z * 1.16;
        if (envelope > 1.05) continue;

        const warpedX = x + Math.sin(y * Math.PI * 1.4 + definition.phase) * 0.1
          + Math.sin(z * Math.PI * 2.1) * 0.045;
        const warpedY = y + Math.sin(z * Math.PI * 1.25 - definition.phase * 0.4) * 0.11
          - Math.sin(x * Math.PI * 1.8) * 0.04;
        const warpedZ = z + Math.sin(x * Math.PI * 1.55 + definition.phase * 0.3) * 0.12
          + Math.cos(y * Math.PI * 1.9) * 0.04;
        const value = chladniVolumeValue(warpedX, warpedY, warpedZ, m, n, p);
        let nearestA = Infinity;
        let nearestB = Infinity;
        let nearestC = Infinity;
        filamentSeeds.forEach((seed) => {
          const dx = warpedX - seed.x;
          const dy = warpedY - seed.y;
          const dz = warpedZ - seed.z;
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (distance < nearestA) {
            nearestC = nearestB;
            nearestB = nearestA;
            nearestA = distance;
          } else if (distance < nearestB) {
            nearestC = nearestB;
            nearestB = distance;
          } else if (distance < nearestC) {
            nearestC = distance;
          }
        });
        const webScore = Math.exp(-((nearestB - nearestA) ** 2) * 28 - ((nearestC - nearestB) ** 2) * 44);
        const nodalScore = Math.exp(-Math.abs(value) * 4.2);
        const filamentScore = webScore * (0.56 + nodalScore * 0.62);
        if (filamentScore < 0.55) continue;

        const strength = Math.min(1, filamentScore * 0.72 + nodalScore * 0.35);
        const jitter = Math.sin((xIndex * 97 + yIndex * 57 + zIndex * 31 + index * 17) * 0.19) * 0.008;
        const point = [
          (warpedX * 1.12 + warpedY * 0.22 + warpedY * warpedZ * 0.055 + jitter) * scale,
          (warpedY * 0.92 + warpedZ * 0.12 + Math.sin(warpedX * Math.PI) * 0.055 - jitter * 0.4) * scale,
          (warpedZ * 0.94 + warpedX * warpedY * 0.07) * scale,
        ];
        positions.push(...point);
        acceptedPoints.set(xIndex * gridSize * gridSize + yIndex * gridSize + zIndex, { point, filamentScore });
        const color = shadowColor.clone().lerp(baseColor, 0.56 + strength * 0.28).lerp(highlightColor, strength * 0.32);
        colors.push(color.r, color.g, color.b);
      }
    }
  }

  acceptedPoints.forEach(({ point, filamentScore }, key) => {
    const xIndex = Math.floor(key / (gridSize * gridSize));
    const remainder = key % (gridSize * gridSize);
    const yIndex = Math.floor(remainder / gridSize);
    const zIndex = remainder % gridSize;
    [[1, 0, 0], [0, 1, 0], [0, 0, 1]].forEach(([xOffset, yOffset, zOffset]) => {
      const neighborKey = (xIndex + xOffset) * gridSize * gridSize
        + (yIndex + yOffset) * gridSize
        + zIndex + zOffset;
      const neighbor = acceptedPoints.get(neighborKey);
      if (!neighbor) return;
      networkPositions.push(...point, ...neighbor.point);
      if (filamentScore > 0.76 || neighbor.filamentScore > 0.76) {
        outlinePositions.push(...point, ...neighbor.point);
      }
    });
  });

  const detachedSheets = [
    { center: [-0.72, 0.86, 0.14], size: [0.52, 0.18], bend: 0.18, angle: -0.22 },
    { center: [0.66, -0.72, -0.2], size: [0.34, 0.14], bend: -0.14, angle: 0.46 },
  ];
  detachedSheets.forEach((sheet) => {
    const columns = 24;
    const rows = 9;
    const sheetPoints = new Map();
    for (let row = 0; row < rows; row += 1) {
      const v = (row / (rows - 1)) * 2 - 1;
      for (let column = 0; column < columns; column += 1) {
        const u = (column / (columns - 1)) * 2 - 1;
        if (u * u + v * v * 1.45 > 1) continue;
        const waveValue = chladniValue(u, v, m, n);
        const localX = u * sheet.size[0];
        const localY = v * sheet.size[1];
        const cos = Math.cos(sheet.angle);
        const sin = Math.sin(sheet.angle);
        const point = [
          (sheet.center[0] + localX * cos - localY * sin) * scale,
          (sheet.center[1] + localX * sin + localY * cos) * scale,
          (sheet.center[2] + waveValue * sheet.bend + u * u * 0.08) * scale,
        ];
        positions.push(...point);
        colors.push(baseColor.r, baseColor.g, baseColor.b);
        sheetPoints.set(row * columns + column, point);
      }
    }
    sheetPoints.forEach((point, key) => {
      const row = Math.floor(key / columns);
      const column = key % columns;
      [[0, 1], [1, 0]].forEach(([rowOffset, columnOffset]) => {
        const neighbor = sheetPoints.get((row + rowOffset) * columns + column + columnOffset);
        if (neighbor) {
          networkPositions.push(...point, ...neighbor);
          outlinePositions.push(...point, ...neighbor);
        }
      });
    });
  });

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const glow = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.065, map: texture, color: definition.color, transparent: true, opacity: 0.045, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  group.add(glow);
  const pattern = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.019, map: texture, vertexColors: true, transparent: true, opacity: 0.62, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  group.add(pattern);

  const networkGeometry = new THREE.BufferGeometry();
  networkGeometry.setAttribute('position', new THREE.Float32BufferAttribute(networkPositions, 3));
  const network = new THREE.LineSegments(networkGeometry, new THREE.LineBasicMaterial({ color: 0xbacde1, transparent: true, opacity: 0.24, depthWrite: false, blending: THREE.AdditiveBlending }));
  group.add(network);

  const outlineGeometry = new THREE.BufferGeometry();
  outlineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(outlinePositions, 3));
  const outline = new THREE.LineSegments(outlineGeometry, new THREE.LineBasicMaterial({ color: 0xf5f7ff, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }));
  group.add(outline);

  group.position.set(...definition.position);
  group.userData = { ...definition, isChladni: true, pattern, glow, network, outline, index };
  return { group, definition };
}

function createReferenceCosmicWebNode(definition, index) {
  const group = new THREE.Group();
  const positions = [];
  const colors = [];
  const data = referenceCosmicWebData;
  const scale = definition.radius * 2.35;
  const palette = [
    [40, 150, 118], [46, 190, 200], [70, 120, 235], [182, 206, 255],
    [236, 182, 92], [230, 72, 96],
  ];
  const bucketColors = Array.from({ length: 48 }, (_, bucket) => {
    const base = palette[Math.min(palette.length - 1, Math.floor(bucket / 8))];
    const heat = (bucket % 8) / 7;
    const wash = heat * heat * 0.72;
    const brightness = 0.32 + heat * 0.68;
    return base.map((channel) => Math.min(255, (channel * (1 - wash) + 255 * wash) * brightness) / 255);
  });

  for (let offset = 0; offset < data.length; offset += 6) {
    const nodeStrength = data[offset + 3];
    const webVisibility = data[offset + 4];
    const density = nodeStrength * webVisibility;
    const x = data[offset] * scale;
    const y = data[offset + 1] * scale;
    const z = data[offset + 2] * scale;
    positions.push(x, y, z);
    const sourceColor = bucketColors[Math.min(47, Math.max(0, Math.round(data[offset + 5])))] || bucketColors[24];
    const brightness = 0.28 + density * 1.05;
    colors.push(
      Math.min(1, sourceColor[0] * brightness),
      Math.min(1, sourceColor[1] * brightness),
      Math.min(1, sourceColor[2] * brightness),
    );
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const glow = new THREE.Points(geometry, new THREE.PointsMaterial({
    size: 0.045, map: texture, color: 0xdbe8ff, transparent: true, opacity: 0.11,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  group.add(glow);
  const pattern = new THREE.Points(geometry, new THREE.PointsMaterial({
    size: 0.014, map: texture, vertexColors: true, transparent: true, opacity: 0.9,
    depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true,
  }));
  group.add(pattern);

  const outlineGeometry = new THREE.BufferGeometry();
  outlineGeometry.setAttribute('position', new THREE.Float32BufferAttribute([], 3));
  const outline = new THREE.LineSegments(outlineGeometry, new THREE.LineBasicMaterial({
    color: 0xdce9ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  group.add(outline);

  group.position.set(...definition.position);
  group.userData = { ...definition, isChladni: true, pattern, glow, network: null, outline, index };
  return { group, definition };
}

function createMinorBody(definition, index) {
  const group = new THREE.Group();
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xbecbdf, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.setScalar(definition.scale * 4.5);
  group.add(halo);
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xf4f7ff, transparent: true, opacity: 0.86, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.scale.setScalar(definition.scale * 1.35);
  group.add(core);

  const companionPositions = [];
  for (let i = 0; i < 11; i += 1) {
    const angle = i * 2.39996323 + index * 0.47;
    const radius = definition.scale * (0.65 + (i % 4) * 0.35);
    companionPositions.push(
      Math.cos(angle) * radius,
      Math.sin(angle) * radius * 0.62,
      Math.sin(angle * 1.7) * radius * 0.35,
    );
  }
  const companionGeometry = new THREE.BufferGeometry();
  companionGeometry.setAttribute('position', new THREE.Float32BufferAttribute(companionPositions, 3));
  const companions = new THREE.Points(companionGeometry, new THREE.PointsMaterial({ size: 0.038, map: texture, color: 0xdce6f7, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
  group.add(companions);
  group.position.set(...definition.position);
  group.userData = { halo, core, companions, phase: index * 0.73 };
  return { group, definition };
}

function createPyramidRay() {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(new Array(6).fill(0), 3));
  const line = new THREE.Line(geometry, new THREE.LineDashedMaterial({ color: 0xc7d0ff, transparent: true, opacity: 0.38, dashSize: 0.085, gapSize: 0.065, depthWrite: false }));
  line.frustumCulled = false;
  line.computeLineDistances();
  return line;
}

function createWavePacket() {
  const group = new THREE.Group();
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: WAVE_COLOR, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  group.add(core);
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(360 * 3);
  const colors = new Float32Array(360 * 3);
  const meta = [];
  const color = new THREE.Color(WAVE_COLOR);
  for (let i = 0; i < 360; i += 1) {
    meta.push({ s: (i / 359) * 2 - 1, angle: i * 2.39996323, radial: 0.45 + (i % 5) * 0.1 });
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const particles = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.044, map: texture, vertexColors: true, transparent: true, opacity: 0.92, depthWrite: false, blending: THREE.AdditiveBlending }));
  group.add(particles);

  const rings = new THREE.Group();
  for (let i = 0; i < 7; i += 1) {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.58, 1, 40),
      new THREE.MeshBasicMaterial({ color: WAVE_COLOR, transparent: true, opacity: 0.12, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
    ring.userData.s = (i / 6) * 2 - 1;
    rings.add(ring);
  }
  group.add(rings);
  group.visible = false;
  group.userData = { core, particles, rings, meta };
  return { group, geometry, positions };
}

function updateWave(time) {
  const state = getWaveState(time);
  wave.group.visible = state.active;
  if (!state.active) return;
  const selection = getSelectionAtTime(time).nodes;
  const edgePosition = state.progress * selection.length;
  const edgeIndex = Math.min(selection.length - 1, Math.floor(edgePosition));
  const edgeProgress = 0.12 + (edgePosition - edgeIndex) * 0.76;
  const from = nodes[selection[edgeIndex]].group.position;
  const to = nodes[selection[(edgeIndex + 1) % selection.length]].group.position;
  const direction = new THREE.Vector3().subVectors(to, from);
  const center = from.clone().lerp(to, smoothstep(edgeProgress));
  const tangent = direction.normalize();
  const side = new THREE.Vector3(0, 1, 0).cross(tangent).normalize();
  if (side.lengthSq() < 0.01) side.set(1, 0, 0);
  const up = tangent.clone().cross(side).normalize();
  wave.group.position.copy(center).addScaledVector(up, Math.sin(time * 19) * 0.045);
  wave.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
  wave.userData = wave.group.userData;
  wave.group.userData.core.scale.setScalar(state.radius * 1.65);
  const positionAttribute = wave.geometry.getAttribute('position');
  wave.group.userData.meta.forEach((particle, index) => {
    const phase = particle.s * 19 - time * 34;
    const envelope = Math.exp(-particle.s * particle.s * 3.2);
    const displacement = Math.sin(phase) * state.radius * 0.58 * envelope;
    const localS = particle.s * state.radius * 2.7 + displacement;
    const localRadius = state.radius * (0.34 + 0.12 * Math.cos(phase));
    const x = Math.cos(particle.angle) * localRadius * particle.radial;
    const y = Math.sin(particle.angle) * localRadius * particle.radial;
    positionAttribute.setXYZ(index, x, y, localS);
  });
  wave.group.userData.rings.children.forEach((ring) => {
    const ringPhase = ring.userData.s * 19 - time * 34;
    const envelope = Math.exp(-ring.userData.s * ring.userData.s * 2.8);
    ring.position.z = ring.userData.s * state.radius * 2.7
      + Math.sin(ringPhase) * state.radius * 0.58 * envelope;
    ring.scale.setScalar(state.radius * (0.64 + 0.12 * Math.cos(ringPhase)));
    ring.material.opacity = 0.05 + Math.max(0, Math.cos(ringPhase)) * 0.22 * envelope;
    ring.rotation.z = time * 0.7 + ring.userData.s;
  });
  positionAttribute.needsUpdate = true;
}

function updateScene(time) {
  const frameTime = Math.min(SCENE_DURATION, Math.floor(time * FPS) / FPS);
  const frame = Math.min(TOTAL_FRAMES - 1, Math.floor(frameTime * FPS));
  if (frame !== lastFrame) {
    lastFrame = frame;
    subtitleEl.textContent = getSubtitleAtTime(frameTime);
    captionEl.textContent = frameTime >= 4.3
      ? '纵波位移  ξ(x,t) = A sin(kx - ωt)'
      : '原初光子 · 重子 · 声压峰';
    timecodeEl.textContent = `${formatTime(frameTime)} / 00:06.40`;
  }
  const focus = getSelectionAtTime(frameTime);
  const focused = new Set(focus.nodes);
  const labelReveal = getLabelRevealAtTime(frameTime, focus.nodes, nodes.length, minorBodies.length);
  const revealedMain = new Set(labelReveal.main);
  celestialField.rotation.x = Math.sin(frameTime * 0.2) * 0.018;
  celestialField.rotation.y = frameTime * 0.035;
  celestialField.rotation.z = Math.sin(frameTime * 0.17) * 0.012;
  nodes.forEach(({ group, definition }, index) => {
    const selected = focused.has(index);
    const pulse = selected ? 1 : 0;
    const targetScale = selected ? 1.18 : 0.9;
    group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    group.position.y = definition.position[1] + Math.sin(time * 0.32 + definition.phase) * 0.05;
    if (group.userData.isChladni) {
      group.rotation.x = 0.58 + Math.sin(frameTime * 0.52 + definition.phase) * 0.24;
      group.rotation.y = definition.phase + frameTime * definition.spin * 1.15;
      group.rotation.z = definition.phase * 0.18 + frameTime * definition.spin * 0.62;
      const isCosmicWeb = definition.boundary === 'volume';
      group.userData.pattern.material.opacity = isCosmicWeb ? 0.34 + pulse * 0.28 : 0.56 + pulse * 0.38;
      group.userData.glow.material.opacity = isCosmicWeb ? 0.02 + pulse * 0.055 : 0.08 + pulse * 0.2;
      if (group.userData.network) group.userData.network.material.opacity = isCosmicWeb ? 0.16 + pulse * 0.16 : 0.1 + pulse * 0.2;
      group.userData.outline.material.opacity = isCosmicWeb ? 0.08 + pulse * 0.16 : 0.07 + pulse * 0.2;
      if (group.userData.vertexPoints) group.userData.vertexPoints.material.opacity = 0.58 + pulse * 0.36;
    } else {
      group.rotation.y = definition.phase + frameTime * definition.spin;
      group.rotation.x = Math.sin(frameTime * 0.6 + definition.phase) * 0.14;
      group.userData.halo.material.opacity = 0.12 + pulse * 0.24 + Math.sin(time * 1.8 + definition.phase) * 0.02;
      group.userData.mantle.material.opacity = 0.28 + pulse * 0.3;
      group.userData.core.material.opacity = 0.6 + pulse * 0.32;
      group.userData.particles.material.opacity = 0.44 + pulse * 0.4;
      group.userData.ring.material.opacity = 0.12 + pulse * 0.26;
    }
    const showLabel = revealedMain.has(index);
    labels[index].classList.toggle('is-focus', selected && showLabel);
    labels[index].style.opacity = showLabel ? (selected ? '1' : '0.58') : '0';
  });

  minorBodies.forEach(({ group }, index) => {
    const pulse = 0.82 + Math.sin(frameTime * 1.35 + group.userData.phase) * 0.18;
    group.scale.setScalar(pulse);
    group.userData.companions.rotation.z = frameTime * (0.12 + (index % 3) * 0.035);
    group.userData.companions.rotation.y = frameTime * 0.08 + group.userData.phase;
    group.userData.core.material.opacity = 0.68 + pulse * 0.16;
    group.userData.halo.material.opacity = 0.08 + pulse * 0.09;
    minorLabels[index].style.opacity = index === labelReveal.minor ? `${0.46 + pulse * 0.2}` : '0';
  });

  PYRAMID_RAYS.forEach(([a, b], edgeIndex) => {
    const line = pyramidRays[edgeIndex];
    const from = nodes[focus.nodes[a]].group.position;
    const to = nodes[focus.nodes[b]].group.position;
    const position = line.geometry.getAttribute('position');
    position.setXYZ(0, from.x, from.y, from.z);
    position.setXYZ(1, to.x, to.y, to.z);
    position.needsUpdate = true;
    line.material.opacity = THREE.MathUtils.smoothstep(frameTime, 0.12, 0.72) * 0.46;
    line.computeLineDistances();
  });

  updateWave(frameTime);
  const cameraPush = getCameraPushAtTime(frameTime);
  camera.position.x = Math.sin(frameTime * 0.12) * 0.28 + cameraPush * 0.035;
  camera.position.y = 0.12 + Math.cos(frameTime * 0.17) * 0.1;
  camera.position.z = 12.5 - cameraPush * 1.1;
  camera.lookAt(0, 0, 0);
  updateLabels();
}

function updateLabels() {
  nodes.forEach(({ group }, index) => {
    updateLabelPosition(group, labels[index]);
  });
  minorBodies.forEach(({ group }, index) => {
    updateLabelPosition(group, minorLabels[index]);
  });
}

function updateLabelPosition(group, label) {
  const projected = group.getWorldPosition(new THREE.Vector3()).project(camera);
  const visible = projected.z < 1 && projected.x > -1.1 && projected.x < 1.1 && projected.y > -1.1 && projected.y < 1.1;
  label.style.display = visible ? 'block' : 'none';
  if (visible) {
    label.style.left = `${(projected.x * 0.5 + 0.5) * 100}%`;
    label.style.top = `${(-projected.y * 0.5 + 0.5) * 100}%`;
  }
}

function smoothstep(value) {
  return value * value * (3 - 2 * value);
}

function formatTime(seconds) {
  return `00:${seconds.toFixed(2).padStart(5, '0')}`;
}

function resize() {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const outputScale = Math.min(window.devicePixelRatio || 1, 2, 3840 / width, 2160 / height);
  renderer.setPixelRatio(outputScale);
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function setPlaying(playing) {
  isPlaying = playing;
  playButton.innerHTML = `<i data-lucide="${playing ? 'pause' : 'play'}"></i>`;
  playButton.setAttribute('aria-label', playing ? '暂停' : '播放');
  playButton.title = playing ? '暂停' : '播放';
  createIcons({ icons: { Play, Pause, RotateCcw } });
}

playButton.addEventListener('click', async () => {
  if (isPlaying) {
    audio.pause();
    setPlaying(false);
    return;
  }
  if (audio.currentTime >= SCENE_DURATION - 0.02) audio.currentTime = 0;
  await audio.play();
  setPlaying(true);
});

resetButton.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  setPlaying(false);
  updateScene(0);
});

audio.addEventListener('timeupdate', () => {
  if (audio.currentTime >= SCENE_DURATION) {
    audio.pause();
    audio.currentTime = SCENE_DURATION;
    setPlaying(false);
  }
});

window.addEventListener('resize', resize);
resize();
updateScene(0);

function render() {
  const time = Math.min(audio.currentTime, SCENE_DURATION);
  updateScene(time);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
}

bootstrap();
