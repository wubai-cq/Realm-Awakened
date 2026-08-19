import * as THREE from 'three';
import { createIcons, Pause, Play, RotateCcw } from 'lucide';
import {
  chladniValue,
  chladniVolumeValue,
} from './chladni.js';
import {
  FPS,
  SCENE_ONE_END,
  SCENE_TWO_END,
  SCENE_THREE_END,
  SCENE_FOUR_START,
  SCENE_THREE_IMPACT_TRAVEL,
  SCENE_DURATION,
  TOTAL_FRAMES,
  PYRAMID_RAYS,
  getCameraPushAtTime,
  getLabelRevealAtTime,
  getRecombinationState,
  getSceneFourState,
  getSceneThreeState,
  getSelectionAtTime,
  getSubtitleAtTime,
  getWaveState,
} from './timeline.js';
import { getDopplerValues } from './wave-physics.js';
import './style.css';

const HOT_COLORS = [0xffffdc, 0xffc735, 0xff7418, 0xff2f0c, 0x8d1207];
const WAVE_COLOR = 0xb9e6ff;
const WAVE_BASE_COLOR = new THREE.Color(WAVE_COLOR);
const WAVE_QUIET_COLOR = new THREE.Color(0xffffff);
const FROZEN_WAVE_COLOR = new THREE.Color(0xc4f3d5);
const waveDisplayColor = new THREE.Color();
const BOUNDARY_SPIN_RATE = 4.2;

// The fourth-scene constellation is traced from the supplied reference image.
// Coordinates preserve its node placement and crossing structure in 3D space.
const ORION_POINTS = {
  clubTip: [1.39, 3.28, 0.52],
  upperHub: [-0.72, 2.02, 0.08],
  upperKnee: [1.06, 2.78, 0.26],
  upperRight: [1.95, 1.63, -0.08],
  betelgeuse: [-2.00, 2.10, 0.42],
  bellatrix: [-2.57, 0.97, -0.28],
  lowerClubRoot: [-1.97, 1.34, 0.14],
  beltRight: [1.55, -0.08, 0.18],
  beltMiddle: [1.22, -0.35, -0.10],
  beltLeft: [0.79, -0.56, 0.26],
  lowerJoint: [0.55, -0.99, 0.04],
  saiph: [-0.90, -3.28, 0.18],
  lowerGuide: [-0.08, -3.61, -0.12],
  rigel: [2.55, -2.77, -0.48],
};

const ORION_STARS = [
  { label: '参宿四', latin: 'BETELGEUSE', position: ORION_POINTS.betelgeuse, scale: 0.15, color: 0xffc7a5 },
  { label: '参宿五', latin: 'BELLATRIX', position: ORION_POINTS.bellatrix, scale: 0.13, color: 0xd5e4ff },
  { label: '猎宿一', latin: 'MEISSA', position: ORION_POINTS.clubTip, scale: 0.11, color: 0xdde9ff },
  { label: '参宿三', latin: 'MINTAKA', position: ORION_POINTS.beltRight, scale: 0.12, color: 0xd9e7ff },
  { label: '参宿二', latin: 'ALNILAM', position: ORION_POINTS.beltMiddle, scale: 0.13, color: 0xe4efff },
  { label: '参宿一', latin: 'ALNITAK', position: ORION_POINTS.beltLeft, scale: 0.11, color: 0xdde9ff },
  { label: '参宿六', latin: 'SAIPH', position: ORION_POINTS.saiph, scale: 0.12, color: 0xcbdcff },
  { label: '参宿七', latin: 'RIGEL', position: ORION_POINTS.rigel, scale: 0.15, color: 0xd7e7ff },
];

const ORION_PATHS = [
  { emphasis: 1.55, points: [ORION_POINTS.betelgeuse, ORION_POINTS.clubTip] },
  { emphasis: 1.55, points: [ORION_POINTS.lowerClubRoot, ORION_POINTS.clubTip] },
  { emphasis: 1.35, points: [ORION_POINTS.betelgeuse, ORION_POINTS.bellatrix] },
  { emphasis: 1.35, points: [ORION_POINTS.betelgeuse, ORION_POINTS.beltLeft] },
  { emphasis: 1.45, points: [ORION_POINTS.bellatrix, ORION_POINTS.beltRight] },
  { emphasis: 1.55, points: [ORION_POINTS.lowerJoint, ORION_POINTS.saiph] },
  { emphasis: 1.55, points: [ORION_POINTS.beltRight, ORION_POINTS.rigel] },
  { emphasis: 0.72, points: [ORION_POINTS.upperHub, ORION_POINTS.upperKnee, ORION_POINTS.upperRight, ORION_POINTS.beltRight] },
  { emphasis: 0.72, points: [ORION_POINTS.upperHub, ORION_POINTS.upperRight] },
  { emphasis: 0.72, points: [ORION_POINTS.upperHub, ORION_POINTS.lowerJoint] },
  { emphasis: 0.72, points: [ORION_POINTS.beltRight, ORION_POINTS.beltMiddle, ORION_POINTS.beltLeft, ORION_POINTS.beltRight] },
  { emphasis: 0.72, points: [ORION_POINTS.beltLeft, ORION_POINTS.lowerJoint, ORION_POINTS.lowerGuide] },
  { emphasis: 0.72, points: [ORION_POINTS.beltMiddle, ORION_POINTS.rigel] },
];

const audio = document.querySelector('#narration');
const canvas = document.querySelector('#scene');
const labelsRoot = document.querySelector('#labels');
const subtitleEl = document.querySelector('#subtitle');
const captionEl = document.querySelector('#caption');
const timecodeEl = document.querySelector('#timecode');
const playButton = document.querySelector('#play');
const resetButton = document.querySelector('#reset');
const eyebrowEl = document.querySelector('.eyebrow');
const titleSubEl = document.querySelector('.title-sub');
const epochMarkerEl = document.querySelector('#epoch-marker');
const baryonVelocityEl = document.querySelector('#baryon-velocity');
const impactMarkerEl = document.querySelector('#impact-marker');
const impactCountEl = document.querySelector('#impact-count');
const waveEquationEl = document.querySelector('#wave-equation');
const waveEquationPathEl = document.querySelector('#wave-equation-path');
const waveF0El = document.querySelector('#wave-f0');
const waveVelocityEl = document.querySelector('#wave-v');
const waveObservedFrequencyEl = document.querySelector('#wave-fp');

createIcons({ icons: { Play, Pause, RotateCcw } });

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setClearColor(0x020407, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x020407, 0.006);
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
const cmbResidual = createCmbResidualField();
celestialField.add(cmbResidual);

const nodeDefinitions = [
  { label: '太阳', latin: 'SUN', position: [-3.35, 1.42, 0.4], radius: 0.62, color: HOT_COLORS[1], spin: 0.42, phase: 0.2 },
  { label: '木星', latin: 'JUPITER', position: [-1.82, -1.55, 0.5], radius: 0.56, color: HOT_COLORS[2], spin: -0.36, phase: 1.2 },
  { label: '天狼星', latin: 'SIRIUS', position: [0.18, 1.72, -0.4], radius: 0.51, color: HOT_COLORS[0], spin: 0.32, phase: 2.1 },
  { label: '土星', latin: 'SATURN', position: [2.16, -1.08, 0.8], radius: 0.5, color: HOT_COLORS[2], spin: 0.29, phase: 1.6 },
  { label: '北极星', latin: 'POLARIS', position: [3.18, 1.92, -0.3], radius: 0.4, color: HOT_COLORS[0], spin: -0.25, phase: 0.4 },
  { label: '火星', latin: 'MARS', position: [1.16, 0.08, 1.05], radius: 0.42, color: HOT_COLORS[3], spin: 0.48, phase: 2.8 },
  { label: '参宿四', latin: 'BETELGEUSE', position: [-3.28, -1.9, -0.8], radius: 0.55, color: HOT_COLORS[3], spin: -0.31, phase: 2.7 },
  { label: '昴星团', latin: 'PLEIADES', position: [-0.74, 0.05, -1.22], radius: 0.64, color: HOT_COLORS[0], spin: 0.39, phase: 1.9, shape: 'chladni', modes: [2, 3, 4], boundary: 'volume', network: true },
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
const boundaryField = createBoundaryLobes();
scene.add(boundaryField.group);
const wave = createWavePacket();
celestialField.add(wave.group);
const sceneFourField = createSceneFourField(texture, labelsRoot);
scene.add(sceneFourField.group);

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
  gradient.addColorStop(0.12, 'rgba(255,255,255,0.96)');
  gradient.addColorStop(0.38, 'rgba(255,255,255,0.18)');
  gradient.addColorStop(0.68, 'rgba(255,255,255,0.02)');
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

function createSceneFourField(texture, labelsRoot) {
  const group = new THREE.Group();
  group.visible = false;

  const backdropPositions = [];
  const backdropColors = [];
  for (let i = 0; i < 620; i += 1) {
    const seed = i * 0.61803398875;
    const x = ((seed * 13.7) % 1 - 0.5) * 12.8;
    const y = (((seed * 7.1) % 1) - 0.5) * 7.1;
    const z = -4.8 + ((seed * 5.3) % 1) * 2.7;
    const brightness = 0.34 + ((i * 17) % 61) / 61 * 0.66;
    backdropPositions.push(x, y, z);
    backdropColors.push(brightness * 0.82, brightness * 0.9, brightness);
  }
  const backdropGeometry = new THREE.BufferGeometry();
  backdropGeometry.setAttribute('position', new THREE.Float32BufferAttribute(backdropPositions, 3));
  backdropGeometry.setAttribute('color', new THREE.Float32BufferAttribute(backdropColors, 3));
  const backdrop = new THREE.Points(backdropGeometry, new THREE.PointsMaterial({
    map: texture,
    size: 0.052,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  }));
  group.add(backdrop);

  const cloudPositions = [];
  const cloudColors = [];
  for (let i = 0; i < 1250; i += 1) {
    const u = ((i * 71) % 1250) / 1250;
    const v = ((i * 193) % 1250) / 1250;
    const w = ((i * 431) % 1250) / 1250;
    const vertical = (u - 0.5) * 5.6;
    const width = (0.22 + v * 0.78) * (1 - Math.abs(vertical) / 3.2);
    const x = -4.7 + (w - 0.5) * width * 1.8 + Math.sin(i * 0.19) * 0.18;
    const y = vertical + Math.sin(i * 0.11) * 0.18;
    const z = -2.35 + (v - 0.5) * 1.5 + Math.cos(i * 0.07) * 0.38;
    const brightness = 0.12 + (1 - Math.abs(vertical) / 3.2) * 0.2 + w * 0.08;
    cloudPositions.push(x, y, z);
    cloudColors.push(brightness * 0.7, brightness * 0.76, brightness * 0.9);
  }
  const cloudGeometry = new THREE.BufferGeometry();
  cloudGeometry.setAttribute('position', new THREE.Float32BufferAttribute(cloudPositions, 3));
  cloudGeometry.setAttribute('color', new THREE.Float32BufferAttribute(cloudColors, 3));
  const cloud = new THREE.Points(cloudGeometry, new THREE.PointsMaterial({
    map: texture,
    size: 0.34,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  }));
  group.add(cloud);

  const stars = ORION_STARS.map((definition, index) => {
    const star = new THREE.Group();
    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      color: definition.color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    halo.scale.setScalar(definition.scale * 4.8);
    const core = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      color: definition.color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    core.scale.setScalar(definition.scale);
    star.add(halo, core);
    star.position.set(...definition.position);
    star.userData = { definition, index, halo, core, phase: index * 0.73 };
    group.add(star);

    const label = document.createElement('div');
    label.className = 'node-label scene-four-label';
    label.innerHTML = `${definition.label}<small>${definition.latin}</small>`;
    labelsRoot.appendChild(label);
    star.userData.label = label;
    return star;
  });

  const lines = ORION_PATHS.map(({ points: pathPoints, emphasis }, index) => {
    const geometryCurve = new THREE.CurvePath();
    for (let pointIndex = 1; pointIndex < pathPoints.length; pointIndex += 1) {
      geometryCurve.add(new THREE.LineCurve3(
        new THREE.Vector3(...pathPoints[pointIndex - 1]),
        new THREE.Vector3(...pathPoints[pointIndex]),
      ));
    }
    const material = new THREE.MeshBasicMaterial({
      color: 0xb8cbed,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const line = new THREE.Mesh(
      new THREE.TubeGeometry(geometryCurve, pathPoints.length * 3, 0.014 * emphasis, 7, false),
      material,
    );
    const glow = new THREE.Mesh(
      new THREE.TubeGeometry(geometryCurve, pathPoints.length * 3, 0.05 * emphasis, 7, false),
      new THREE.MeshBasicMaterial({
        color: 0x6d8db9,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    line.userData = { index, glow };
    group.add(glow);
    group.add(line);
    return line;
  });

  const distanceFrom = ORION_STARS[3].position;
  const distanceTo = [0.2, -0.38, -0.02];
  const distanceGeometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(...distanceFrom),
    new THREE.Vector3(...distanceTo),
  ]);
  const distanceMaterial = new THREE.LineDashedMaterial({
    color: 0x8ed9b4,
    dashSize: 0.12,
    gapSize: 0.09,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  });
  const distanceLine = new THREE.Line(distanceGeometry, distanceMaterial);
  distanceLine.computeLineDistances();
  group.add(distanceLine);
  const distanceAnchor = new THREE.Object3D();
  distanceAnchor.position.copy(new THREE.Vector3(...distanceFrom).lerp(new THREE.Vector3(...distanceTo), 0.52));
  group.add(distanceAnchor);
  const distanceLabel = document.createElement('div');
  distanceLabel.className = 'node-label scene-four-distance';
  distanceLabel.innerHTML = '147 Mpc<small>BAO SCALE</small>';
  labelsRoot.appendChild(distanceLabel);

  const imprint = new THREE.Group();
  const imprintHalo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    color: 0x78d6a0,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  imprintHalo.scale.setScalar(1.65);
  const imprintCore = new THREE.Sprite(new THREE.SpriteMaterial({
    map: texture,
    color: FROZEN_WAVE_COLOR,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
  }));
  imprintCore.scale.setScalar(0.62);
  const imprintRings = [0.36, 0.58, 0.82].map((radius, index) => {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(radius, radius + 0.012, 64),
      new THREE.MeshBasicMaterial({
        color: 0x8de0b6,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    ring.userData.phase = index * 0.9;
    imprint.add(ring);
    return ring;
  });
  imprint.add(imprintHalo, imprintCore);
  imprint.position.set(0.2, -0.38, -0.02);
  group.add(imprint);

  return {
    group,
    backdrop,
    cloud,
    stars,
    lines,
    distanceLine,
    distanceAnchor,
    distanceLabel,
    imprint,
    imprintHalo,
    imprintCore,
    imprintRings,
    imprintTarget: new THREE.Vector3(0.2, -0.38, -0.02),
  };
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
    { count: 1400, size: 0.042, opacity: 0.56 },
    { count: 560, size: 0.078, opacity: 0.72 },
    { count: 170, size: 0.13, opacity: 0.64 },
  ].forEach((layer, layerIndex) => {
    const positions = [];
    const colors = [];
    const phases = [];
    const speeds = [];
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
      const isWhiteStar = (i * 37 + layerIndex * 13) % 31 < 2;
      colors.push(
        brightness,
        brightness * (isWhiteStar ? 0.9 : 0.16),
        brightness * (isWhiteStar ? 1 : 0.035),
      );
      phases.push(random() * Math.PI * 2);
      speeds.push(2.1 + random() * 1.4);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setAttribute('aPhase', new THREE.Float32BufferAttribute(phases, 1));
    geometry.setAttribute('aSpeed', new THREE.Float32BufferAttribute(speeds, 1));
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: layer.size * 680 },
        uOpacity: { value: layer.opacity },
        uReveal: { value: 0 },
        uAbsorbProgress: { value: 0 },
        uAbsorbTarget: { value: new THREE.Vector3() },
      },
      vertexShader: `
        attribute float aPhase;
        attribute float aSpeed;
        uniform float uTime;
        uniform float uSize;
        uniform float uAbsorbProgress;
        uniform vec3 uAbsorbTarget;
        varying vec3 vColor;
        varying float vPulse;
        varying float vCapture;
        void main() {
          vColor = color;
          float wave = 0.5 + 0.5 * sin(uTime * aSpeed + aPhase);
          vPulse = smoothstep(0.18, 0.82, wave);
          float captureStart = fract(aPhase / 6.2831853) * 0.62;
          float localProgress = clamp((uAbsorbProgress - captureStart) / 0.38, 0.0, 1.0);
          vCapture = (1.0 - exp(-5.0 * localProgress)) / 0.993262;
          vec3 displaced = mix(position, uAbsorbTarget, vCapture);
          vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
          gl_PointSize = uSize * (0.62 + vPulse * 0.62) / max(1.0, -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        uniform float uReveal;
        uniform float uAbsorbProgress;
        varying vec3 vColor;
        varying float vPulse;
        varying float vCapture;
        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float core = 1.0 - smoothstep(0.0, 0.14, distanceToCenter);
          float halo = 1.0 - smoothstep(0.1, 0.4, distanceToCenter);
          float coreLight = core * (0.58 + vPulse * 0.42);
          float haloLight = halo * (0.025 + vPulse * 0.5);
          float capturedFade = 1.0 - smoothstep(0.88, 0.995, vCapture);
          float convergenceBoost = 1.0 + sin(uAbsorbProgress * 3.1415926) * 0.42;
          float alpha = (coreLight + haloLight) * uOpacity * uReveal * capturedFade * convergenceBoost;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
    });
    field.add(new THREE.Points(geometry, material));
  });
  return field;
}

function createCmbResidualField() {
  const count = 1100;
  const positions = [];
  const colors = [];
  const warm = new THREE.Color(0xb9512d);
  const cool = new THREE.Color(0x55a9c0);
  const neutral = new THREE.Color(0x70818d);

  for (let i = 0; i < count; i += 1) {
    const xNoise = ((i * 73) % count) / count;
    const yNoise = ((i * 419) % count) / count;
    const x = (xNoise * 2 - 1) * 6.6 + Math.sin(i * 1.71) * 0.12;
    const y = (yNoise * 2 - 1) * 3.65 + Math.cos(i * 1.13) * 0.08;
    const z = -4.2 + Math.sin(i * 0.37) * 0.7;
    const temperature = Math.sin(x * 1.18) + Math.cos(y * 1.76) + Math.sin((x - y) * 0.63);
    const strength = Math.min(1, Math.abs(temperature) / 2.4);
    const color = neutral.clone().lerp(temperature >= 0 ? warm : cool, 0.42 + strength * 0.5);
    const brightness = 0.28 + strength * 0.58;

    positions.push(x, y, z);
    colors.push(color.r * brightness, color.g * brightness, color.b * brightness);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  const material = new THREE.PointsMaterial({
    size: 0.07,
    map: texture,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const points = new THREE.Points(geometry, material);
  points.visible = false;
  return points;
}

function createBoundaryLobes() {
  const positions = [
    [-2.2, 0, 0],
  ];
  const group = new THREE.Group();
  const ember = new THREE.Color(0xff3b0d);
  const molten = new THREE.Color(0xffcb70);
  const lobes = positions.map((position, lobeIndex) => {
    const pointCount = 360;
    const basePositions = new Float32Array(pointCount * 3);
    const currentPositions = new Float32Array(pointCount * 3);
    const drift = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount; i += 1) {
      const theta = i * 2.39996323 + lobeIndex * 0.71;
      const phi = Math.acos(1 - 2 * ((i + 0.5) / pointCount));
      const noise = 0.94 + Math.sin(i * 1.73 + lobeIndex) * 0.04 + Math.cos(i * 0.47) * 0.025;
      const radius = 0.64 * noise;
      const x = Math.cos(theta) * Math.sin(phi) * radius;
      const y = Math.cos(phi) * radius;
      const z = Math.sin(theta) * Math.sin(phi) * radius;
      const offset = i * 3;
      basePositions.set([x, y, z], offset);
      currentPositions.set([x, y, z], offset);
      const inverseLength = 1 / Math.max(0.001, Math.hypot(x, y, z));
      const driftScale = 0.08 + ((i * 31 + lobeIndex * 17) % 23) / 23 * 0.18;
      drift.set([
        x * inverseLength * driftScale + Math.sin(i * 0.83) * 0.035,
        y * inverseLength * driftScale + Math.cos(i * 0.57) * 0.025,
        z * inverseLength * driftScale + Math.sin(i * 1.17) * 0.04,
      ], offset);
      const highlight = 0.18 + ((i * 13) % 19) / 19 * 0.72;
      const color = ember.clone().lerp(molten, highlight);
      colors.set([color.r, color.g, color.b], offset);
    }

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(0.62, 40, 28),
      new THREE.ShaderMaterial({
        uniforms: {
          uReveal: { value: 0 },
          uImpact: { value: 0 },
          uScar: { value: 0 },
          uPhase: { value: lobeIndex * 1.37 },
        },
        vertexShader: `
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vObjectPosition = position;
            vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
            vViewNormal = normalize(normalMatrix * normal);
            vViewDirection = normalize(-viewPosition.xyz);
            gl_Position = projectionMatrix * viewPosition;
          }
        `,
        fragmentShader: `
          uniform float uReveal;
          uniform float uImpact;
          uniform float uScar;
          uniform float uPhase;
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vec3 p = normalize(vObjectPosition);
            float broadField = sin(p.x * 14.0 + sin(p.y * 8.0 + uPhase) * 2.2)
              + sin(p.y * 16.0 - sin(p.z * 9.0 - uPhase) * 1.8)
              + sin(p.z * 13.0 + sin(p.x * 7.0) * 2.0);
            float fineField = sin((p.x + p.y) * 31.0 + uPhase)
              * sin((p.y - p.z) * 27.0 - uPhase * 0.7);
            float broadCrack = 1.0 - smoothstep(0.035, 0.27, abs(broadField));
            float fineCrack = 1.0 - smoothstep(0.02, 0.1, abs(fineField));
            float cracks = pow(clamp(max(broadCrack, fineCrack * 0.44), 0.0, 1.0), 1.12);
            vec3 normal = normalize(vViewNormal);
            vec3 viewDirection = normalize(vViewDirection);
            vec3 lightDirection = normalize(vec3(-0.42, 0.68, 0.72));
            float diffuse = 0.13 + max(dot(normal, lightDirection), 0.0) * 0.87;
            float fresnel = pow(1.0 - max(dot(normal, viewDirection), 0.0), 2.2);
            float specular = pow(max(dot(reflect(-lightDirection, normal), viewDirection), 0.0), 26.0);
            vec3 darkCrust = (vec3(0.038, 0.004, 0.0015) + vec3(0.095, 0.012, 0.003) * fresnel) * diffuse;
            vec3 lava = mix(vec3(1.0, 0.055, 0.006), vec3(1.0, 0.62, 0.12), cracks);
            float crackEnergy = cracks * (0.72 + uScar * 0.42 + uImpact * 1.35);
            vec3 color = darkCrust + lava * crackEnergy;
            color += vec3(1.0, 0.08, 0.01) * fresnel * (0.14 + uImpact * 0.5);
            color += vec3(1.0, 0.46, 0.18) * specular * 0.22;
            gl_FragColor = vec4(color, uReveal);
          }
        `,
        transparent: true,
        depthWrite: true,
      }),
    );
    shell.rotation.set(lobeIndex * 0.11, lobeIndex * 0.37, lobeIndex * 0.08);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({
      size: 0.034,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }));
    points.rotation.copy(shell.rotation);
    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.78, 36, 24),
      new THREE.ShaderMaterial({
        uniforms: {
          uReveal: { value: 0 },
          uImpact: { value: 0 },
          uHeat: { value: 0 },
          uPhase: { value: lobeIndex * 0.83 },
        },
        vertexShader: `
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vObjectPosition = position;
            vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
            vViewNormal = normalize(normalMatrix * normal);
            vViewDirection = normalize(-viewPosition.xyz);
            gl_Position = projectionMatrix * viewPosition;
          }
        `,
        fragmentShader: `
          uniform float uReveal;
          uniform float uImpact;
          uniform float uHeat;
          uniform float uPhase;
          varying vec3 vObjectPosition;
          varying vec3 vViewNormal;
          varying vec3 vViewDirection;
          void main() {
            vec3 p = normalize(vObjectPosition);
            float viewDot = max(dot(normalize(vViewNormal), normalize(vViewDirection)), 0.0);
            float fresnel = pow(1.0 - viewDot, 2.15);
            float flow = 0.5 + 0.5 * sin(p.x * 11.0 + sin(p.y * 8.0 + uPhase) * 1.7 + p.z * 6.0);
            float heat = clamp(uHeat + uImpact * 0.22, 0.0, 1.0);
            float density = (0.045 + fresnel * 0.43) * (0.72 + flow * 0.28) * (1.0 + heat * 0.58);
            vec3 color = mix(vec3(0.72, 0.015, 0.002), vec3(1.0, 0.34, 0.018), clamp(fresnel + heat * 0.58, 0.0, 1.0));
            color += vec3(1.0, 0.18, 0.008) * heat * (0.16 + fresnel * 0.54);
            gl_FragColor = vec4(color, density * uReveal * (1.0 + uImpact * 0.72));
          }
        `,
        transparent: true,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    );
    atmosphere.renderOrder = -2;

    const coronaCount = 260;
    const coronaPositions = new Float32Array(coronaCount * 3);
    const coronaColors = new Float32Array(coronaCount * 3);
    for (let i = 0; i < coronaCount; i += 1) {
      const theta = i * 2.39996323 + lobeIndex * 0.51;
      const phi = Math.acos(1 - 2 * ((i + 0.5) / coronaCount));
      const radius = 0.72 + ((i * 31 + lobeIndex * 7) % 29) / 29 * 0.17;
      const offset = i * 3;
      coronaPositions.set([
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius,
      ], offset);
      const coronaColor = new THREE.Color(0xff2608).lerp(
        new THREE.Color(0xff9a32),
        ((i * 17) % 23) / 23 * 0.45,
      );
      coronaColors.set(coronaColor.toArray(), offset);
    }
    const coronaGeometry = new THREE.BufferGeometry();
    coronaGeometry.setAttribute('position', new THREE.BufferAttribute(coronaPositions, 3));
    coronaGeometry.setAttribute('color', new THREE.BufferAttribute(coronaColors, 3));
    const corona = new THREE.Points(coronaGeometry, new THREE.PointsMaterial({
      size: 0.052,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    }));

    const center = new THREE.Vector3(...position);
    const previous = lobeIndex === 0
      ? new THREE.Vector3(0, 0, 0)
      : new THREE.Vector3(...positions[lobeIndex - 1]);
    const contactDirection = previous.sub(center);
    // Face the incoming wave toward the visible hemisphere so the horizontal
    // six-shaped splash remains readable when the camera settles on impact.
    if (contactDirection.lengthSq() < 0.001) contactDirection.set(1, 0, 0);
    else contactDirection.normalize();
    const tangentA = new THREE.Vector3(0, 1, 0)
      .addScaledVector(contactDirection, -contactDirection.y)
      .normalize();
    if (tangentA.lengthSq() < 0.01) tangentA.set(1, 0, 0);
    const tangentB = contactDirection.clone().cross(tangentA).normalize();

    const core = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      color: 0xffe7b0,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    core.scale.setScalar(0.2);
    core.position.copy(contactDirection).multiplyScalar(0.642);
    const burst = new THREE.Sprite(new THREE.SpriteMaterial({
      map: texture,
      color: 0xfff0c4,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    burst.position.copy(core.position);
    burst.scale.setScalar(0.3);

    const rippleRingCount = 3;
    const rippleSamples = 96;
    const rippleCount = rippleRingCount * rippleSamples;
    const ripplePositions = new Float32Array(rippleCount * 3);
    const rippleSizes = new Float32Array(rippleCount);
    const rippleAlpha = new Float32Array(rippleCount);
    const ripplePhase = new Float32Array(rippleCount);
    for (let i = 0; i < rippleCount; i += 1) {
      const ringIndex = Math.floor(i / rippleSamples);
      const sampleIndex = i % rippleSamples;
      const phase = (sampleIndex / rippleSamples) * Math.PI * 2 + ringIndex * 0.37;
      const offset = i * 3;
      ripplePositions.set(contactDirection.clone().multiplyScalar(0.635).toArray(), offset);
      rippleSizes[i] = 0.034 + ((i * 17 + lobeIndex * 7) % 19) / 19 * 0.026;
      ripplePhase[i] = phase;
    }
    const rippleGeometry = new THREE.BufferGeometry();
    rippleGeometry.setAttribute('position', new THREE.BufferAttribute(ripplePositions, 3));
    rippleGeometry.setAttribute('aSize', new THREE.BufferAttribute(rippleSizes, 1));
    rippleGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(rippleAlpha, 1).setUsage(THREE.DynamicDrawUsage));
    const ripple = new THREE.Points(rippleGeometry, new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0xffd7a0) },
        uOpacity: { value: 0 },
        uPointScale: { value: 180 },
      },
      vertexShader: `
        attribute float aSize;
        attribute float aAlpha;
        uniform float uPointScale;
        varying float vAlpha;
        void main() {
          vAlpha = aAlpha;
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.0, aSize * uPointScale / max(1.0, -viewPosition.z));
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        uniform float uOpacity;
        varying float vAlpha;
        void main() {
          float radius = length(gl_PointCoord - vec2(0.5));
          float alpha = exp(-radius * radius * 24.0) * vAlpha * uOpacity;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(uColor, alpha);
        }
      `,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    ripple.renderOrder = 11;
    ripple.frustumCulled = false;

    // A dense field of small points reads as granular ejecta rather than one
    // continuous flame ribbon.
    // Increase the ejecta field by half while keeping the same spatial
    // distribution, so the collision reads denser without changing its form.
    const splashCount = 3525;
    const splashPositions = new Float32Array(splashCount * 3);
    const splashVelocities = new Float32Array(splashCount * 3);
    const splashSurfaceDirections = new Float32Array(splashCount * 3);
    const splashColors = new Float32Array(splashCount * 3);
    const splashSizes = new Float32Array(splashCount);
    const splashEnergy = new Float32Array(splashCount);
    const splashAlpha = new Float32Array(splashCount);
    const splashTypes = new Uint8Array(splashCount);
    const splashDelays = new Float32Array(splashCount);
    const splashLifetimes = new Float32Array(splashCount);
    const splashSpinDrag = new Float32Array(splashCount);
    for (let i = 0; i < splashCount; i += 1) {
      const angle = i * 2.39996323 + lobeIndex * 0.43;
      const typeSeed = ((i * 47 + lobeIndex * 19) % 101) / 101;
      const type = typeSeed < 0.38 ? 0 : typeSeed < 0.88 ? 1 : 2;
      const speedSeed = ((i * 29 + lobeIndex * 11) % 97) / 97;
      const tangentSeed = ((i * 71 + lobeIndex * 23) % 103) / 103;
      const radialSpeed = type === 0
        ? 0.12 + speedSeed * 0.3
        : type === 1
          ? 0.28 + speedSeed * 1.72
          : 1.2 + speedSeed * 2.1;
      const tangentSpeed = type === 0
        ? 0.18 + tangentSeed ** 0.72 * 1.08
        : type === 1
          ? 0.06 + tangentSeed ** 0.68 * 2.08
          : 0.28 + tangentSeed ** 0.62 * 2.55;
      const jitterSeed = ((i * 13 + lobeIndex * 5) % 31) / 31;
      const jitterRadius = 0.012 + Math.sqrt(jitterSeed) * 0.12;
      const jitterA = Math.cos(angle) * jitterRadius;
      const jitterB = Math.sin(angle) * jitterRadius;
      const origin = contactDirection.clone().multiplyScalar(0.59)
        .addScaledVector(tangentA, jitterA)
        .addScaledVector(tangentB, jitterB);
      const velocity = contactDirection.clone().multiplyScalar(radialSpeed)
        .addScaledVector(tangentA, Math.cos(angle) * tangentSpeed)
        .addScaledVector(tangentB, Math.sin(angle) * tangentSpeed);
      const offset = i * 3;
      splashPositions.set(origin.toArray(), offset);
      splashVelocities.set(velocity.toArray(), offset);
      const surfaceDirection = origin.normalize();
      splashSurfaceDirections.set(surfaceDirection.toArray(), offset);
      const hotness = ((i * 23 + lobeIndex * 13) % 31) / 31;
      const splashColor = new THREE.Color(0xff2608).lerp(new THREE.Color(0xfff0b8), hotness ** 3.2);
      splashColors.set(splashColor.toArray(), offset);
      const sizeSeed = ((i * 19 + lobeIndex * 5) % 43) / 43;
      splashSizes[i] = (type === 1 ? 0.022 : 0.018)
        + sizeSeed ** 3 * (type === 2 ? 0.075 : 0.095);
      splashEnergy[i] = 0.35 + ((i * 11 + lobeIndex * 17) % 37) / 37 * 0.65;
      splashTypes[i] = type;
      splashDelays[i] = ((i * 41 + lobeIndex * 17) % 97) / 97 * (type === 0 ? 0.38 : 0.22);
      splashLifetimes[i] = type === 0
        ? 2.7 + speedSeed * 0.7
        : type === 1
          ? 3.2 + speedSeed * 0.8
          : 0.7 + speedSeed * 0.5;
      splashSpinDrag[i] = type === 0
        ? 0.72 + speedSeed * 0.32
        : type === 1
          ? 0.28 + speedSeed * 0.38
          : 0.08 + speedSeed * 0.2;
    }
    const splashGeometry = new THREE.BufferGeometry();
    splashGeometry.setAttribute('position', new THREE.BufferAttribute(splashPositions, 3));
    splashGeometry.setAttribute('color', new THREE.BufferAttribute(splashColors, 3));
    splashGeometry.setAttribute('aSize', new THREE.BufferAttribute(splashSizes, 1));
    splashGeometry.setAttribute('aEnergy', new THREE.BufferAttribute(splashEnergy, 1));
    splashGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(splashAlpha, 1).setUsage(THREE.DynamicDrawUsage));
    const splash = new THREE.Points(splashGeometry, new THREE.ShaderMaterial({
      uniforms: {
        uOpacity: { value: 0 },
        uPointScale: { value: 180 },
      },
      vertexShader: `
        attribute vec3 color;
        attribute float aSize;
        attribute float aEnergy;
        attribute float aAlpha;
        uniform float uPointScale;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vColor = color * (0.78 + aEnergy * 0.5);
          vAlpha = aAlpha;
          vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = max(1.0, aSize * uPointScale / max(1.0, -viewPosition.z));
          gl_Position = projectionMatrix * viewPosition;
        }
      `,
      fragmentShader: `
        uniform float uOpacity;
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          float distanceToCenter = length(gl_PointCoord - vec2(0.5));
          float gaussian = exp(-distanceToCenter * distanceToCenter * 18.0);
          // A broad, low-opacity Gaussian fills the space between hot cores
          // and gives the ejecta a soft suspended haze.
          float haze = exp(-distanceToCenter * distanceToCenter * 4.2) * 0.18;
          float alpha = (gaussian + haze) * vAlpha * uOpacity;
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vColor, alpha);
        }
      `,
      transparent: true,
      depthTest: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    }));
    splash.renderOrder = 12;
    splash.frustumCulled = false;

    const surfaceEffects = new THREE.Group();
    surfaceEffects.add(core, burst, ripple, splash);
    const lobe = new THREE.Group();
    lobe.add(atmosphere, corona, shell, points, surfaceEffects);
    lobe.position.set(...position);
    lobe.userData = {
      shell,
      points,
      atmosphere,
      corona,
      core,
      burst,
      surfaceEffects,
      ripple,
      splash,
      basePositions,
      drift,
      splashVelocities,
      splashSurfaceDirections,
      splashEnergy,
      splashTypes,
      splashDelays,
      splashLifetimes,
      splashSpinDrag,
      contactDirection,
      tangentA,
      tangentB,
      ripplePhase,
      surfaceBaseRotation: shell.rotation.clone(),
      impactSpinOrigin: 0,
      impactCaptured: false,
      phase: lobeIndex * 0.73,
    };
    group.add(lobe);
    return lobe;
  });
  group.visible = false;
  return { group, lobes, positions: positions.map((position) => new THREE.Vector3(...position)) };
}

function createPlasmaNode(definition, index) {
  if (definition.shape === 'chladni' && definition.boundary === 'volume') {
    return createVolumetricChladniNode(definition, index);
  }
  if (definition.shape === 'chladni') return createChladniNode(definition, index);
  const group = new THREE.Group();
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: definition.color, transparent: true, opacity: 0.2, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.setScalar(definition.radius * 2.7);
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
    const brightness = 0.38 + density * 1.15;
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
    size: 0.02, map: texture, vertexColors: true, transparent: true, opacity: 0.9,
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
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0x7a0c02, transparent: true, opacity: 0.16, depthWrite: false, blending: THREE.AdditiveBlending }));
  halo.scale.setScalar(definition.scale * 3.5);
  group.add(halo);
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xff2f0c, transparent: true, opacity: 0.86, depthWrite: false, blending: THREE.AdditiveBlending }));
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
  const companions = new THREE.Points(companionGeometry, new THREE.PointsMaterial({ size: 0.038, map: texture, color: 0xff5a1f, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true }));
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
  const frozenCoreBoost = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, color: 0xffffff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  frozenCoreBoost.renderOrder = 21;
  group.add(frozenCoreBoost);
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
  for (let i = 0; i < 9; i += 1) {
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(0.88, 1, 64),
      new THREE.MeshBasicMaterial({ color: WAVE_COLOR, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }),
    );
    ring.userData.s = (i / 8) * 2 - 1;
    rings.add(ring);
  }
  group.add(rings);
  group.visible = false;
  group.userData = { core, frozenCoreBoost, particles, rings, meta };
  return { group, geometry, positions };
}

function updateWave(time) {
  const state = getWaveState(time);
  const recombination = getRecombinationState(time);
  const inRecombinationScene = time > SCENE_ONE_END && time <= SCENE_TWO_END;
  const inSceneThree = time > SCENE_TWO_END;

  // Scene three owns the wave placement. Keeping this update out of the
  // third-scene path prevents the old node-to-node animation from snapping it
  // back to the right-hand start point every frame.
  if (!state.active || inSceneThree) {
    wave.group.visible = false;
    return;
  }

  wave.group.visible = true;
  if (inRecombinationScene) {
    const anchor = wave.group.userData.recombinationAnchor;
    if (anchor) wave.group.position.copy(anchor);
    if (wave.group.userData.recombinationAnchorQuaternion) {
      wave.group.quaternion.copy(wave.group.userData.recombinationAnchorQuaternion);
    }

    const silence = recombination.silenceBrightness;
    waveDisplayColor.copy(WAVE_BASE_COLOR).lerp(WAVE_QUIET_COLOR, silence);
    wave.group.userData.core.material.color.copy(waveDisplayColor);
    wave.group.userData.core.material.opacity = THREE.MathUtils.lerp(0.78, 1, silence);
    wave.group.userData.particles.material.opacity = THREE.MathUtils.lerp(0.92, 0.16, recombination.progress);
    wave.group.userData.rings.children.forEach((ring) => {
      const ringPhase = ring.userData.s * 19 - recombination.waveTime * 34;
      const envelope = Math.exp(-ring.userData.s * ring.userData.s * 2.8);
      ring.material.opacity = (0.1 + Math.max(0, Math.cos(ringPhase)) * 0.38 * envelope)
        * (1 - silence);
    });
    return;
  }

  const waveTime = time;
  const shellExpansion = 1;
  const waveMotion = 1;
  waveDisplayColor.copy(WAVE_BASE_COLOR).lerp(WAVE_QUIET_COLOR, recombination.silenceBrightness);
  const selection = getSelectionAtTime(time).nodes;
  const edgePosition = Math.min(state.progress, 0.9) * selection.length;
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
  wave.group.position.copy(center).addScaledVector(up, Math.sin(waveTime * 19) * 0.045 * waveMotion);
  wave.group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
  wave.userData = wave.group.userData;
  wave.group.userData.recombinationAnchor = wave.group.position.clone();
  wave.group.userData.recombinationAnchorQuaternion = wave.group.quaternion.clone();
  wave.group.userData.core.scale.setScalar(
    state.radius * 1.65,
  );
  const coreOpacity = 0.9;
  wave.group.userData.core.material.color.copy(waveDisplayColor);
  wave.group.userData.core.material.opacity = THREE.MathUtils.lerp(coreOpacity, 1, recombination.silenceBrightness);
  wave.group.userData.frozenCoreBoost.material.opacity = 0;
  wave.group.userData.particles.material.opacity = THREE.MathUtils.lerp(0.92, 1, recombination.silenceBrightness);
  wave.group.userData.particles.material.size = THREE.MathUtils.lerp(0.044, 0.072, recombination.silenceBrightness);
  const positionAttribute = wave.geometry.getAttribute('position');
  const colorAttribute = wave.geometry.getAttribute('color');
  wave.group.userData.meta.forEach((particle, index) => {
    const phase = particle.s * 19 - waveTime * 34;
    const envelope = Math.exp(-particle.s * particle.s * 3.2);
    const displacement = Math.sin(phase) * state.radius * 0.58 * envelope;
    const localS = (particle.s * state.radius * 2.7 + displacement) * (1 + recombination.progress * 0.8);
    const localRadius = state.radius * (0.34 + 0.12 * Math.cos(phase)) * shellExpansion;
    const x = Math.cos(particle.angle) * localRadius * particle.radial;
    const y = Math.sin(particle.angle) * localRadius * particle.radial;
    positionAttribute.setXYZ(index, x, y, localS);
    colorAttribute.setXYZ(index, waveDisplayColor.r, waveDisplayColor.g, waveDisplayColor.b);
  });
  wave.group.userData.rings.children.forEach((ring) => {
    const ringPhase = ring.userData.s * 19 - waveTime * 34;
    const envelope = Math.exp(-ring.userData.s * ring.userData.s * 2.8);
    ring.position.z = ring.userData.s * 0.42
      + Math.sin(ringPhase) * 0.045 * envelope;
    ring.position.z *= 1 + recombination.progress * 0.8;
    ring.scale.setScalar((0.31 + (0.5 + 0.5 * Math.cos(ringPhase)) * 0.22 * envelope) * shellExpansion);
    ring.material.opacity = (0.1 + Math.max(0, Math.cos(ringPhase)) * 0.38 * envelope)
      * (1 - recombination.progress * 0.35);
    ring.rotation.z = waveTime * 0.7 + ring.userData.s;
  });
  positionAttribute.needsUpdate = true;
  colorAttribute.needsUpdate = true;
}

function updateBoundaryLobes(state, motionTime) {
  boundaryField.group.visible = state.active;
  if (!state.active) {
    boundaryField.lobes.forEach((lobe) => {
      lobe.userData.impactCaptured = false;
    });
    return;
  }

  const emberTint = new THREE.Color(0xff4b16);
  const impactTint = new THREE.Color(0xffe7ae);
  boundaryField.lobes.forEach((lobe, index) => {
    const targetPosition = index + 1;
    const impactAge = state.impactClock - targetPosition;
    const approachProgress = THREE.MathUtils.clamp((state.pathPosition - targetPosition + 0.3) / 0.3, 0, 1);
    const recovery = impactAge <= 0 ? 1 : 1 - smoothstep(THREE.MathUtils.clamp(impactAge / 0.34, 0, 1));
    const compression = smoothstep(approachProgress) * recovery;
    const flash = impactAge < 0 ? 0 : Math.exp(-impactAge * 7.5);
    const fracture = impactAge < 0 ? 0 : smoothstep(THREE.MathUtils.clamp(impactAge / 0.7, 0, 1));
    const scar = impactAge < 0 ? 0 : smoothstep(THREE.MathUtils.clamp(impactAge / 0.16, 0, 1));
    const {
      shell,
      points,
      atmosphere,
      corona,
      core,
      burst,
      surfaceEffects,
      splash,
      basePositions,
      drift,
      splashVelocities,
      splashSurfaceDirections,
      splashEnergy,
      splashTypes,
      splashDelays,
      splashLifetimes,
      splashSpinDrag,
      ripple,
      contactDirection,
      tangentA,
      tangentB,
      ripplePhase,
      surfaceBaseRotation,
      impactSpinOrigin,
      impactCaptured,
    } = lobe.userData;
    if (impactAge >= 0 && !impactCaptured) {
      lobe.userData.impactSpinOrigin = motionTime;
      lobe.userData.impactCaptured = true;
    }
    const elapsedSinceImpact = lobe.userData.impactCaptured
      ? Math.max(0, motionTime - lobe.userData.impactSpinOrigin)
      : 0;
    const verticalSpinAngle = motionTime * BOUNDARY_SPIN_RATE + index * 0.52;
    const positionAttribute = points.geometry.getAttribute('position');

    for (let particleIndex = 0; particleIndex < positionAttribute.count; particleIndex += 1) {
      const offset = particleIndex * 3;
      const split = Math.sign(basePositions[offset] || 1) * fracture * 0.1;
      positionAttribute.array[offset] = basePositions[offset] + drift[offset] * fracture * 1.7 + split;
      positionAttribute.array[offset + 1] = basePositions[offset + 1] + drift[offset + 1] * fracture * 1.7;
      positionAttribute.array[offset + 2] = basePositions[offset + 2] + drift[offset + 2] * fracture * 1.7;
    }
    positionAttribute.needsUpdate = true;

    shell.rotation.set(
      surfaceBaseRotation.x,
      surfaceBaseRotation.y + verticalSpinAngle,
      surfaceBaseRotation.z,
    );
    points.rotation.copy(shell.rotation);
    atmosphere.rotation.copy(shell.rotation);
    corona.rotation.set(
      shell.rotation.x * 0.72,
      surfaceBaseRotation.y + verticalSpinAngle,
      shell.rotation.z * 0.66,
    );
    surfaceEffects.rotation.set(
      0,
      lobe.userData.impactCaptured ? elapsedSinceImpact * BOUNDARY_SPIN_RATE : 0,
      0,
    );
    const lobeScale = 1.42;
    lobe.scale.setScalar(lobeScale);
    shell.material.uniforms.uReveal.value = state.reveal;
    shell.material.uniforms.uImpact.value = flash;
    shell.material.uniforms.uScar.value = scar;
    atmosphere.material.uniforms.uReveal.value = state.reveal;
    // The impact flash decays, but the halo stays thermally hot after contact.
    const sustainedHeat = impactAge < 0 ? 0 : 1 - Math.exp(-impactAge * 16);
    atmosphere.material.uniforms.uImpact.value = Math.max(flash, sustainedHeat * 0.34);
    atmosphere.material.uniforms.uHeat.value = sustainedHeat;
    points.material.color.copy(emberTint).lerp(impactTint, flash * 0.68);
    points.material.opacity = state.reveal * (0.08 + flash * 0.38 + scar * 0.08);
    corona.material.opacity = state.reveal * (0.2 + compression * 0.08 + flash * 0.24);
    core.material.opacity = state.reveal * (flash * 0.98 + scar * 0.045);
    core.scale.setScalar(0.2 + flash * 0.46 + scar * 0.03);

    const ripplePositionAttribute = ripple.geometry.getAttribute('position');
    const rippleAlphaAttribute = ripple.geometry.getAttribute('aAlpha');
    const rippleDamping = state.rippleStrength;
    for (let rippleIndex = 0; rippleIndex < ripplePositionAttribute.count; rippleIndex += 1) {
      const ringIndex = Math.floor(rippleIndex / 96);
      const ringAge = elapsedSinceImpact - ringIndex * 0.12;
      const offset = rippleIndex * 3;
      if (!lobe.userData.impactCaptured || ringAge < 0 || ringAge > 2.9) {
        rippleAlphaAttribute.array[rippleIndex] = 0;
        continue;
      }

      const ringProgress = THREE.MathUtils.clamp(ringAge / 2.35, 0, 1);
      const sigma = 0.06 + ringProgress * 0.92;
      const phase = ripplePhase[rippleIndex] + ringAge * 5.8;
      const sinSigma = Math.sin(sigma);
      const surfaceX = contactDirection.x * Math.cos(sigma)
        + (tangentA.x * Math.cos(phase) + tangentB.x * Math.sin(phase)) * sinSigma;
      const surfaceY = contactDirection.y * Math.cos(sigma)
        + (tangentA.y * Math.cos(phase) + tangentB.y * Math.sin(phase)) * sinSigma;
      const surfaceZ = contactDirection.z * Math.cos(sigma)
        + (tangentA.z * Math.cos(phase) + tangentB.z * Math.sin(phase)) * sinSigma;
      const surfaceLength = Math.hypot(surfaceX, surfaceY, surfaceZ);
      const surfaceScale = 0.642 / Math.max(0.001, surfaceLength);
      ripplePositionAttribute.array[offset] = surfaceX * surfaceScale;
      ripplePositionAttribute.array[offset + 1] = surfaceY * surfaceScale;
      ripplePositionAttribute.array[offset + 2] = surfaceZ * surfaceScale;
      const rise = smoothstep(THREE.MathUtils.clamp(ringAge / 0.045, 0, 1));
      const fade = 1 - smoothstep(THREE.MathUtils.clamp((ringAge - 1.2) / 1.7, 0, 1));
      rippleAlphaAttribute.array[rippleIndex] = rise * fade * rippleDamping * (0.68 + flash * 0.36);
    }
    ripplePositionAttribute.needsUpdate = true;
    rippleAlphaAttribute.needsUpdate = true;
    ripple.material.uniforms.uOpacity.value = state.reveal * 1.3;
    ripple.material.uniforms.uPointScale.value = renderer.domElement.height * 0.72;

    const splashPositionAttribute = splash.geometry.getAttribute('position');
    const splashAlphaAttribute = splash.geometry.getAttribute('aAlpha');
    const splashDamping = state.rippleStrength;
    for (let particleIndex = 0; particleIndex < splashPositionAttribute.count; particleIndex += 1) {
      const offset = particleIndex * 3;
      const localAge = elapsedSinceImpact - splashDelays[particleIndex];
      const lifetime = splashLifetimes[particleIndex];
      if (!lobe.userData.impactCaptured || localAge < 0 || localAge > lifetime) {
        splashAlphaAttribute.array[particleIndex] = 0;
        continue;
      }

      const lifeProgress = localAge / lifetime;
      const particleType = splashTypes[particleIndex];
      const energy = splashEnergy[particleIndex];
      const phase = particleIndex * 2.39996323 + lobe.userData.phase;
      const angularSpeed = 4.6 + splashSpinDrag[particleIndex] * 8.4;
      const vortexAngle = phase + localAge * angularSpeed;
      const cosVortex = Math.cos(vortexAngle);
      const sinVortex = Math.sin(vortexAngle);

      if (particleType === 0) {
        // Surface-bound ejecta spreads over a spherical cap. The parent
        // surfaceEffects group supplies the same vertical spin as the body.
        const geodesic = 0.04 + localAge * (0.3 + energy * 0.42);
        const sigma = Math.min(1.05, geodesic);
        const surfaceX = contactDirection.x * Math.cos(sigma)
          + (tangentA.x * cosVortex + tangentB.x * sinVortex) * Math.sin(sigma);
        const surfaceY = contactDirection.y * Math.cos(sigma)
          + (tangentA.y * cosVortex + tangentB.y * sinVortex) * Math.sin(sigma);
        const surfaceZ = contactDirection.z * Math.cos(sigma)
          + (tangentA.z * cosVortex + tangentB.z * sinVortex) * Math.sin(sigma);
        const surfaceLength = Math.hypot(surfaceX, surfaceY, surfaceZ);
        const lift = 0.018 + energy * 0.08 * Math.exp(-localAge * 1.3);
        const surfaceScale = (0.642 + lift) / Math.max(0.001, surfaceLength);
        splashPositionAttribute.array[offset] = surfaceX * surfaceScale;
        splashPositionAttribute.array[offset + 1] = surfaceY * surfaceScale;
        splashPositionAttribute.array[offset + 2] = surfaceZ * surfaceScale;
      } else if (particleType === 1) {
        // The main ejecta keeps its three Archimedean arms, but each particle
        // receives an independent vertical/depth layer so it reads as a 3D
        // spray volume rather than a single horizontal slice.
        const radialSeed = ((particleIndex * 37 + index * 17) % 997) / 997;
        const jitterSeed = ((particleIndex * 71 + 13) % 101) / 101 - 0.5;
        const layerSeed = ((particleIndex * 113 + index * 29) % 991) / 991 - 0.5;
        const depthSeed = ((particleIndex * 89 + index * 11) % 977) / 977 - 0.5;
        const arm = particleIndex % 3;
        const targetAngle = radialSeed * Math.PI * 4.6 + arm * Math.PI * 2 / 3;
        const targetRadius = 0.72 + radialSeed * 1.72 + jitterSeed * 0.12;
        const spread = smoothstep(THREE.MathUtils.clamp(localAge / 0.78, 0, 1));
        const diskAngle = targetAngle * spread
          + localAge * (0.5 + splashSpinDrag[particleIndex] * 0.85);
        const diskRadius = THREE.MathUtils.lerp(0.642, targetRadius, spread)
          + Math.sin(targetAngle * 3 + phase) * 0.028 * spread;
        const diskTilt = 0.18 + energy * 0.16;
        const diskX = Math.cos(diskAngle) * diskRadius;
        const diskDepth = Math.sin(diskAngle) * diskRadius;
        const layerAmplitude = (0.08 + spread * 0.38) * (0.55 + radialSeed * 0.72);
        const verticalLayer = layerSeed * layerAmplitude
          + Math.sin(targetAngle * 1.7 + phase + localAge * 2.2) * 0.045 * spread;
        const depthLayer = depthSeed * (0.06 + spread * 0.24);
        splashPositionAttribute.array[offset] = diskX;
        splashPositionAttribute.array[offset + 1] = diskDepth * Math.sin(diskTilt)
          + jitterSeed * 0.085 * spread + verticalLayer;
        splashPositionAttribute.array[offset + 2] = diskDepth * Math.cos(diskTilt) + depthLayer;
      } else {
        // A small fast population keeps the initial collision explosive before
        // the larger rotating cross-section becomes readable.
        const spiralRadius = 0.018 + localAge * (0.12 + energy * 0.25);
        const forwardDistance = localAge
          * (0.78 + energy * 0.6)
          * Math.exp(-localAge * 0.16);
        const lift = Math.sin(vortexAngle * 0.5) * 0.025 * energy;
        splashPositionAttribute.array[offset] = contactDirection.x * (0.642 + forwardDistance)
          + tangentA.x * cosVortex * spiralRadius
          + tangentB.x * sinVortex * spiralRadius;
        splashPositionAttribute.array[offset + 1] = contactDirection.y * (0.642 + forwardDistance)
          + tangentA.y * cosVortex * spiralRadius
          + tangentB.y * sinVortex * spiralRadius
          + lift;
        splashPositionAttribute.array[offset + 2] = contactDirection.z * (0.642 + forwardDistance)
          + tangentA.z * cosVortex * spiralRadius
          + tangentB.z * sinVortex * spiralRadius;
      }
      const rise = smoothstep(THREE.MathUtils.clamp(localAge / 0.045, 0, 1));
      const fade = 1 - smoothstep(THREE.MathUtils.clamp((lifeProgress - 0.46) / 0.54, 0, 1));
      const typeOpacity = particleType === 0 ? 0.7 : particleType === 1 ? 0.92 : 1.08;
      splashAlphaAttribute.array[particleIndex] = rise * fade * typeOpacity
        * (0.42 + energy * 0.7) * splashDamping;
    }
    splashPositionAttribute.needsUpdate = true;
    splashAlphaAttribute.needsUpdate = true;
    splash.material.uniforms.uOpacity.value = state.reveal * 1.9;
    splash.material.uniforms.uPointScale.value = renderer.domElement.height * 0.72;
    const burstRise = smoothstep(THREE.MathUtils.clamp(elapsedSinceImpact / 0.035, 0, 1));
    const burstEnvelope = lobe.userData.impactCaptured
      ? burstRise * Math.exp(-elapsedSinceImpact * 5.2)
      : 0;
    burst.material.opacity = state.reveal * burstEnvelope * 0.95;
    burst.scale.setScalar(0.28 + burstEnvelope * 0.82);
  });
}

function quaternionAlong(from, to) {
  const direction = new THREE.Vector3().subVectors(to, from).normalize();
  return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);
}

function getBoundaryImpact(rotating = false) {
  const lobe = boundaryField.lobes[0];
  const localContact = lobe.userData.contactDirection.clone().multiplyScalar(0.642);
  const surfaceObject = rotating ? lobe.userData.surfaceEffects : lobe;
  surfaceObject.updateWorldMatrix(true, false);
  const worldPoint = surfaceObject.localToWorld(localContact);
  const centerWorld = lobe.getWorldPosition(new THREE.Vector3());
  const normalWorld = worldPoint.clone().sub(centerWorld).normalize();
  celestialField.updateWorldMatrix(true, false);
  const localPoint = celestialField.worldToLocal(worldPoint.clone());
  return { worldPoint, localPoint, normalWorld };
}

function updateSceneThreeCamera(frameTime, storyTime, cameraPush, recombination, state) {
  const basePosition = new THREE.Vector3(
    Math.sin(storyTime * 0.12) * 0.28 + cameraPush * 0.035,
    0.12 + Math.cos(storyTime * 0.17) * 0.1,
    12.5 - cameraPush * 1.1 + recombination.progress * 1.7,
  );
  const baseTarget = new THREE.Vector3(0, 0, 0);
  const sceneThreePreviewProgress = smoothstep(
    THREE.MathUtils.clamp((frameTime - (SCENE_TWO_END - 0.42)) / 0.42, 0, 1),
  );
  if (!state.active && sceneThreePreviewProgress <= 0) {
    camera.position.copy(basePosition);
    camera.lookAt(baseTarget);
    return;
  }

  const waveWorld = wave.group.getWorldPosition(new THREE.Vector3());
  const sphereWorld = boundaryField.lobes[0].getWorldPosition(new THREE.Vector3());
  const followTarget = sphereWorld.clone().lerp(waveWorld, 0.34);
  const followPosition = followTarget.clone().add(new THREE.Vector3(0, 0.18, 7.4));
  const followProgress = state.active ? 1 : sceneThreePreviewProgress;
  const surfaceProgress = state.active
    ? smoothstep(THREE.MathUtils.clamp((state.impactClock - 1) / 0.34, 0, 1))
    : 0;
  // Lock the post-impact camera to the sphere center. Following the rotating
  // contact point made the camera co-rotate with the body and visually erased
  // its vertical-axis spin.
  const surfaceTarget = sphereWorld;
  // A slight elevated angle reveals the annular particle orbit instead of
  // collapsing it into a flat horizontal slice.
  const surfacePosition = surfaceTarget.clone().add(new THREE.Vector3(0, 2.15, 6.9));

  camera.position.copy(basePosition).lerp(followPosition, followProgress).lerp(surfacePosition, surfaceProgress);
  camera.lookAt(baseTarget.lerp(followTarget, followProgress).lerp(surfaceTarget, surfaceProgress));
}

function updateSceneFourCamera(frameTime, state, boundaryField) {
  const sphereCenter = boundaryField.lobes[0].getWorldPosition(new THREE.Vector3());
  const startPosition = sphereCenter.clone().add(new THREE.Vector3(0, 2.15, 6.9));
  const widePosition = new THREE.Vector3(0, 0.38, 13.4);
  const wideTarget = new THREE.Vector3(0, 0.02, 0);
  const reveal = state.active
    ? smoothstep(THREE.MathUtils.clamp((frameTime - SCENE_FOUR_START) / 1.8, 0, 1))
    : 0;
  camera.position.copy(startPosition).lerp(widePosition, reveal);
  camera.position.x += Math.sin(Math.max(0, frameTime - SCENE_FOUR_START) * 0.42) * 0.16 * reveal;
  camera.lookAt(sphereCenter.clone().lerp(wideTarget, reveal));
}

function updateSceneThreeWave(state) {
  if (!state.active) {
    if (!wave.group.userData.sceneThreeActive) return;
    wave.group.userData.sceneThreeActive = false;
    wave.group.userData.sceneThreeStart = null;
    wave.group.userData.sceneThreeStartQuaternion = null;
    wave.group.scale.setScalar(1);
    wave.group.userData.core.renderOrder = 0;
    wave.group.userData.core.material.depthTest = true;
    wave.group.userData.frozenCoreBoost.material.opacity = 0;
    return;
  }

  wave.group.userData.sceneThreeActive = true;
  wave.group.visible = true;
  const lobe = boundaryField.lobes[0];
  const impactTarget = getBoundaryImpact(false).localPoint;

  if (state.pathPosition <= 0) {
    // Start well outside the core's right hemisphere. Capturing this explicit
    // point prevents the scene-two wave position from making the wave appear
    // glued to the impact surface on the first frame.
    const centerWorld = lobe.getWorldPosition(new THREE.Vector3());
    const outwardWorld = lobe.userData.contactDirection.clone().normalize();
    const startWorld = centerWorld.addScaledVector(outwardWorld, 3.15);
    celestialField.updateWorldMatrix(true, false);
    const startPosition = celestialField.worldToLocal(startWorld);
    wave.group.userData.sceneThreeStart = startPosition;
    wave.group.userData.sceneThreeStartQuaternion = quaternionAlong(
      startPosition,
      impactTarget,
    );
    wave.group.position.copy(startPosition);
    wave.group.quaternion.copy(wave.group.userData.sceneThreeStartQuaternion);
    wave.group.scale.setScalar(1);
    wave.group.userData.core.scale.setScalar(0.82);
    wave.group.userData.core.material.color.copy(WAVE_BASE_COLOR);
    wave.group.userData.core.material.opacity = 0.94;
    wave.group.userData.particles.material.opacity = 0.88;
    wave.group.userData.frozenCoreBoost.material.opacity = 0;
    return;
  }

  const startPosition = wave.group.userData.sceneThreeStart ?? wave.group.position.clone();
  const startQuaternion = wave.group.userData.sceneThreeStartQuaternion ?? wave.group.quaternion.clone();
  const travellingProgress = 1 - Math.pow(1 - state.pathPosition, 2.35);
  const impactAge = Math.max(0, state.impactClock - 1) * SCENE_THREE_IMPACT_TRAVEL;

  if (state.pathPosition < 1) {
    // Fast leftward travel, with a short ease-out just before contact so the
    // impact reads as a physical meeting rather than a teleport.
    const toQuaternion = quaternionAlong(startPosition, impactTarget);
    wave.group.position.copy(startPosition).lerp(impactTarget, travellingProgress);
    wave.group.quaternion.copy(startQuaternion).slerp(toQuaternion, travellingProgress);
  } else {
    // After contact the wave is carried around the sphere's vertical axis.
    // The spherical parameterization makes the orbit visible in 3D instead
    // of leaving the wave fixed on the old right-hand contact point.
    const axis = new THREE.Vector3(0, 1, 0);
    const surfaceAngle = impactAge * BOUNDARY_SPIN_RATE;
    const surfaceNormal = lobe.userData.contactDirection.clone()
      .applyAxisAngle(axis, surfaceAngle)
      .normalize();
    const surfaceWorld = lobe.getWorldPosition(new THREE.Vector3())
      .addScaledVector(surfaceNormal, 0.642 * 1.42);
    celestialField.updateWorldMatrix(true, false);
    const surfacePosition = celestialField.worldToLocal(surfaceWorld);
    const centerPosition = celestialField.worldToLocal(
      lobe.getWorldPosition(new THREE.Vector3()),
    );
    const tangent = axis.clone().cross(surfaceNormal).normalize();
    const tangentEnd = surfacePosition.clone().add(tangent);
    // As the sound freezes, it loses its surface orbit and is drawn into the
    // exact center of the 六合. The sprite footprint stays constant; only its
    // position and the surrounding wave energy are damped.
    wave.group.position.copy(surfacePosition).lerp(centerPosition, state.freeze);
    wave.group.quaternion.copy(quaternionAlong(surfacePosition, tangentEnd));
  }

  // Keep the wave's physical footprint fixed; silence removes the ripples and
  // particles, not the bright core itself.
  wave.group.scale.setScalar(1);
  wave.group.userData.particles.material.opacity = 0.88 * state.rippleStrength;
  wave.group.userData.rings.children.forEach((ring) => {
    const ringEnvelope = 0.12 + Math.max(0, Math.cos(ring.userData.s * 19)) * 0.34;
    ring.material.opacity = ringEnvelope * state.rippleStrength;
  });
  const impactFlash = state.pathPosition >= 1 ? Math.exp(-impactAge * 10) : 0;
  wave.group.userData.core.scale.setScalar(0.82);
  wave.group.userData.core.renderOrder = 20;
  waveDisplayColor.copy(WAVE_BASE_COLOR).lerp(FROZEN_WAVE_COLOR, state.freeze);
  wave.group.userData.core.material.color.copy(waveDisplayColor);
  wave.group.userData.core.material.depthTest = false;
  wave.group.userData.core.material.opacity = state.coreStrength * (0.9 + impactFlash * 0.1);
  wave.group.userData.frozenCoreBoost.scale.copy(wave.group.userData.core.scale);
  wave.group.userData.frozenCoreBoost.material.color.copy(FROZEN_WAVE_COLOR);
  wave.group.userData.frozenCoreBoost.material.opacity = state.freeze * 0.82;
}

function updateSceneFour(field, state, frameTime, boundaryField) {
  const {
    group,
    backdrop,
    cloud,
    stars,
    lines,
    distanceLine,
    distanceLabel,
    imprint,
    imprintHalo,
    imprintCore,
    imprintRings,
    imprintTarget,
  } = field;
  if (!state.active) {
    group.visible = false;
    stars.forEach((star) => {
      star.userData.label.style.opacity = '0';
      star.userData.label.style.display = 'none';
    });
    distanceLabel.style.opacity = '0';
    distanceLabel.style.display = 'none';
    return;
  }

  group.visible = true;
  const depthReveal = smoothstep(THREE.MathUtils.clamp(
    (frameTime - SCENE_FOUR_START) / 1.35,
    0,
    1,
  ));
  const sceneFourElapsed = Math.max(0, frameTime - SCENE_FOUR_START);
  group.rotation.x = depthReveal * (0.06 + Math.sin(sceneFourElapsed * 0.32) * 0.04);
  group.rotation.y = depthReveal * (-0.12 + Math.sin(sceneFourElapsed * 0.24) * 0.08);
  group.rotation.z = depthReveal * Math.sin(sceneFourElapsed * 0.18) * 0.025;
  backdrop.material.opacity = state.reveal * 0.68;
  cloud.material.opacity = state.reveal * (0.34 + Math.sin(sceneFourElapsed * 0.24) * 0.035);
  const sphereCenter = boundaryField.lobes[0].getWorldPosition(new THREE.Vector3());
  const imprintMove = smoothstep(THREE.MathUtils.clamp(
    (frameTime - SCENE_FOUR_START) / 1.05,
    0,
    1,
  ));
  imprint.position.copy(sphereCenter).lerp(imprintTarget, imprintMove);
  imprint.rotation.z = Math.sin((frameTime - SCENE_FOUR_START) * 0.7) * 0.08;

  stars.forEach((star) => {
    const { halo, core, phase, label } = star.userData;
    const pulse = 0.9 + Math.sin(frameTime * 1.6 + phase) * 0.1;
    core.material.opacity = state.constellationReveal * pulse * 0.92;
    halo.material.opacity = state.constellationReveal * pulse * 0.24;
    const labelOpacity = state.constellationReveal * (0.52 + pulse * 0.22);
    label.style.opacity = `${labelOpacity}`;
    label.style.display = 'block';
  });

  lines.forEach((line, index) => {
    const lineDelay = index * 0.075;
    const lineProgress = smoothstep(THREE.MathUtils.clamp(
      (state.lineReveal - lineDelay) / 0.24,
      0,
      1,
    ));
    line.material.opacity = lineProgress * 0.5;
    line.userData.glow.material.opacity = lineProgress * 0.2;
  });
  distanceLine.material.opacity = state.distanceReveal * 0.54;
  distanceLabel.style.opacity = `${state.distanceReveal * 0.7}`;
  distanceLabel.style.display = 'block';

  const imprintEnergy = state.reveal * (1 - state.imprintFade * 0.72);
  imprintCore.material.opacity = imprintEnergy * 0.96;
  imprintHalo.material.opacity = imprintEnergy * 0.28;
  imprintCore.scale.setScalar(0.62 + Math.sin(frameTime * 1.4) * 0.018);
  imprintHalo.scale.setScalar(1.65 + Math.sin(frameTime * 1.1) * 0.06);
  imprintRings.forEach((ring, index) => {
    const ringPhase = frameTime * (1.8 - index * 0.22) + ring.userData.phase;
    ring.scale.setScalar(1 + Math.sin(ringPhase) * 0.04);
    ring.material.opacity = imprintEnergy * (0.16 - index * 0.025);
  });
}

function updateWaveEquation(time) {
  const state = getWaveState(time);
  const showEquation = state.active && time <= SCENE_ONE_END;
  waveEquationEl.classList.toggle('is-visible', showEquation);
  if (!showEquation) return;

  const values = getDopplerValues(state.progress);
  waveF0El.textContent = Math.round(values.sourceFrequency);
  waveVelocityEl.textContent = values.velocityRatio.toFixed(2);
  waveObservedFrequencyEl.textContent = Math.round(values.observedFrequency);

  const projected = wave.group.getWorldPosition(new THREE.Vector3()).project(camera);
  const left = THREE.MathUtils.clamp((projected.x * 0.5 + 0.5) * 100 + 7, 21, 79);
  const top = THREE.MathUtils.clamp((-projected.y * 0.5 + 0.5) * 100 - 5, 27, 69);
  const fadeIn = smoothstep(Math.min(1, state.progress / 0.08));
  const fadeOut = smoothstep(Math.min(1, (1 - state.progress) / 0.1));

  waveEquationEl.style.left = `${left}%`;
  waveEquationEl.style.top = `${top}%`;
  waveEquationEl.style.opacity = `${fadeIn * fadeOut}`;
  waveEquationPathEl.style.strokeDashoffset = `${96 - state.progress * 192}`;
}

function updateScene(time, motionTime = time) {
  const frameTime = Math.min(SCENE_DURATION, Math.floor(time * FPS) / FPS);
  const recombination = getRecombinationState(frameTime);
  const sceneThree = getSceneThreeState(frameTime);
  const sceneFour = getSceneFourState(frameTime);
  // Keep the exact second-scene endpoint owned by recombination. Scene three
  // begins on the following 30 FPS frame, so its right-side approach cannot
  // overwrite the second scene's final image.
  const sceneThreeVisible = sceneThree.active && frameTime > SCENE_TWO_END;
  const sceneThreeRenderState = sceneThreeVisible
    ? sceneThree
    : { ...sceneThree, active: false };
  const sceneFourVisible = sceneFour.active && frameTime > SCENE_THREE_END;
  const sceneFourRenderState = sceneFourVisible
    ? sceneFour
    : { ...sceneFour, active: false };
  const storyTime = frameTime >= SCENE_ONE_END ? recombination.waveTime : frameTime;
  const sceneThreeTransition = THREE.MathUtils.smoothstep(frameTime, SCENE_TWO_END, SCENE_TWO_END + 0.76);
  const oldFieldVisibility = 1 - sceneThreeTransition;
  const coolingVisibility = (1 - recombination.progress * 0.46) * oldFieldVisibility;
  const labelFade = 1 - THREE.MathUtils.smoothstep(recombination.progress, 0, 0.12);
  const spinTime = motionTime * 2;
  const frame = Math.min(TOTAL_FRAMES - 1, Math.floor(frameTime * FPS));
  if (frame !== lastFrame) {
    lastFrame = frame;
    subtitleEl.textContent = getSubtitleAtTime(frameTime);
    captionEl.textContent = sceneFourVisible
      ? '声学印记 · d_BAO ≈ 147 Mpc · 星系间距'
      : sceneThreeVisible
      ? '碰撞冲量  J = ∫F dt = Δp · 声痕冻结'
      : frameTime > SCENE_ONE_END
        ? '声学俘获 · x(t) = xw + (x₀ − xw)e^(−λt)'
      : frameTime >= 4.3
        ? '纵波位移  ξ(x,t) = A sin(kx - ωt)'
        : '原初光子 · 重子 · 声压峰';
    const showSceneFourTitle = sceneFourVisible && frameTime > SCENE_FOUR_START + 0.25;
    const showSceneThreeTitle = sceneThreeVisible && frameTime > SCENE_TWO_END + 0.25;
    const showSceneTwoTitle = frameTime >= SCENE_ONE_END + 0.3;
    eyebrowEl.textContent = showSceneFourTitle
      ? 'SCENE 04 / DISTANCE IMPRINT'
      : showSceneThreeTitle
      ? 'SCENE 03 / SIXFOLD CORE'
      : showSceneTwoTitle
        ? 'SCENE 02 / RECOMBINATION'
        : 'SCENE 01 / PRIMORDIAL PLASMA';
    titleSubEl.textContent = showSceneFourTitle
      ? '回声，写进星系之间。'
      : showSceneThreeTitle
      ? '一声，撞向六合。'
      : showSceneTwoTitle
        ? '光与物质，从此分离。'
        : '很久以前，声音还没有名字。';
    timecodeEl.textContent = `${formatTime(frameTime)} / 00:24.60`;
  }
  const focus = getSelectionAtTime(frameTime);
  const focused = new Set(focus.nodes);
  const labelReveal = getLabelRevealAtTime(frameTime, focus.nodes, nodes.length, minorBodies.length);
  const revealedMain = new Set(labelReveal.main);
  celestialField.rotation.x = Math.sin(storyTime * 0.2) * 0.018;
  celestialField.rotation.y = storyTime * 0.035;
  celestialField.rotation.z = Math.sin(storyTime * 0.17) * 0.012;
  const smallStarReveal = THREE.MathUtils.smoothstep(frameTime, 0.85, 1.25);
  stars.children.forEach((starLayer) => {
    starLayer.material.uniforms.uTime.value = motionTime;
    starLayer.material.uniforms.uReveal.value = smallStarReveal;
    starLayer.material.uniforms.uAbsorbProgress.value = recombination.absorption;
  });
  const cmbSceneThreeFade = THREE.MathUtils.lerp(1, 0.18, sceneThreeTransition);
  cmbResidual.visible = recombination.progress > 0;
  cmbResidual.material.opacity = THREE.MathUtils.smoothstep(recombination.progress, 0.04, 0.34) * 0.28 * cmbSceneThreeFade;
  const epochIn = THREE.MathUtils.smoothstep(recombination.progress, 0.05, 0.18);
  const epochOut = 1 - THREE.MathUtils.smoothstep(recombination.progress, 0.84, 0.97);
  epochMarkerEl.style.opacity = `${epochIn * epochOut}`;
  epochMarkerEl.style.transform = `translateY(${(1 - epochIn) * 8}px)`;
  baryonVelocityEl.textContent = recombination.baryonVelocity.toFixed(3);
  impactMarkerEl.style.opacity = `${sceneThreeVisible ? sceneThree.reveal * (1 - sceneThree.freeze * 0.35) : 0}`;
  impactMarkerEl.style.transform = `translateY(${(1 - sceneThree.reveal) * 8}px)`;
  impactCountEl.textContent = String(sceneThree.completedImpacts).padStart(2, '0');
  nodes.forEach(({ group, definition }, index) => {
    const selected = focused.has(index);
    const pulse = selected ? 1 - recombination.progress * 0.82 : 0;
    const baseScale = selected ? 1.18 : 0.9;
    const targetScale = THREE.MathUtils.lerp(baseScale, 0.78, recombination.progress);
    group.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
    group.position.x = definition.position[0] * (1 + recombination.progress * 0.08);
    group.position.y = definition.position[1] * (1 + recombination.progress * 0.06)
      + Math.sin(storyTime * 0.32 + definition.phase) * 0.05 * recombination.baryonVelocity;
    group.position.z = definition.position[2] - recombination.progress * 0.45;
    if (group.userData.isChladni) {
      group.rotation.x = 0.58 + Math.sin(spinTime * 0.52 + definition.phase) * 0.24;
      group.rotation.y = definition.phase + spinTime * definition.spin * 1.15;
      group.rotation.z = definition.phase * 0.18 + spinTime * definition.spin * 0.62;
      const isCosmicWeb = definition.boundary === 'volume';
      group.userData.pattern.material.opacity = (isCosmicWeb ? 0.5 + pulse * 0.38 : 0.56 + pulse * 0.38) * coolingVisibility;
      group.userData.glow.material.opacity = (isCosmicWeb ? 0.01 + pulse * 0.035 : 0.08 + pulse * 0.2) * coolingVisibility;
      if (group.userData.network) group.userData.network.material.opacity = (isCosmicWeb ? 0.16 + pulse * 0.16 : 0.1 + pulse * 0.2) * coolingVisibility;
      group.userData.outline.material.opacity = (isCosmicWeb ? 0.08 + pulse * 0.16 : 0.07 + pulse * 0.2) * coolingVisibility;
      if (group.userData.vertexPoints) group.userData.vertexPoints.material.opacity = (0.58 + pulse * 0.36) * coolingVisibility;
    } else {
      group.rotation.y = definition.phase + spinTime * definition.spin;
      group.rotation.x = Math.sin(spinTime * 0.6 + definition.phase) * 0.14;
      group.userData.halo.material.opacity = (0.07 + pulse * 0.16 + Math.sin(motionTime * 1.8 + definition.phase) * 0.015) * coolingVisibility;
      group.userData.mantle.material.opacity = (0.22 + pulse * 0.24) * coolingVisibility;
      group.userData.core.material.opacity = (0.6 + pulse * 0.32) * coolingVisibility;
      group.userData.particles.material.opacity = (0.44 + pulse * 0.4) * coolingVisibility;
      group.userData.ring.material.opacity = (0.12 + pulse * 0.26) * coolingVisibility;
    }
    const showLabel = revealedMain.has(index);
    labels[index].classList.toggle('is-focus', selected && showLabel);
    labels[index].style.opacity = showLabel ? `${(selected ? 1 : 0.58) * labelFade}` : '0';
  });

  minorBodies.forEach(({ group, definition }, index) => {
    const pulse = 0.82 + Math.sin(storyTime * 1.35 + group.userData.phase) * 0.18 * recombination.baryonVelocity;
    group.scale.setScalar(pulse * THREE.MathUtils.lerp(1, 0.72, recombination.progress));
    group.position.x = definition.position[0] * (1 + recombination.progress * 0.14);
    group.position.y = definition.position[1] * (1 + recombination.progress * 0.11);
    group.position.z = definition.position[2] - recombination.progress * 0.55;
    group.userData.companions.rotation.z = spinTime * (0.12 + (index % 3) * 0.035);
    group.userData.companions.rotation.y = spinTime * 0.08 + group.userData.phase;
    group.userData.core.material.opacity = (0.68 + pulse * 0.16) * coolingVisibility;
    group.userData.halo.material.opacity = (0.04 + pulse * 0.07) * coolingVisibility;
    minorLabels[index].style.opacity = index === labelReveal.minor ? `${(0.46 + pulse * 0.2) * labelFade}` : '0';
  });

  PYRAMID_RAYS.forEach(([a, b], edgeIndex) => {
    const line = pyramidRays[edgeIndex];
    const from = nodes[focus.nodes[a]].group.position;
    const to = nodes[focus.nodes[b]].group.position;
    const position = line.geometry.getAttribute('position');
    position.setXYZ(0, from.x, from.y, from.z);
    position.setXYZ(1, to.x, to.y, to.z);
    position.needsUpdate = true;
    line.material.opacity = THREE.MathUtils.smoothstep(frameTime, 0.12, 0.72) * 0.46 * labelFade;
    line.computeLineDistances();
  });

  updateBoundaryLobes(sceneThreeRenderState, motionTime);
  updateWave(frameTime);
  updateSceneThreeWave(sceneThreeRenderState);
  updateSceneFour(sceneFourField, sceneFourRenderState, frameTime, boundaryField);
  stars.children.forEach((starLayer) => {
    starLayer.material.uniforms.uAbsorbTarget.value.copy(wave.group.position);
  });
  const cameraPush = getCameraPushAtTime(frameTime);
  if (sceneFourVisible) {
    updateSceneFourCamera(frameTime, sceneFourRenderState, boundaryField);
  } else {
    updateSceneThreeCamera(frameTime, storyTime, cameraPush, recombination, sceneThreeRenderState);
  }
  camera.updateMatrixWorld();
  updateWaveEquation(frameTime);
  updateLabels();
  updateSceneFourLabels(sceneFourField, sceneFourRenderState);
}

function updateLabels() {
  nodes.forEach(({ group }, index) => {
    updateLabelPosition(group, labels[index]);
  });
  minorBodies.forEach(({ group }, index) => {
    updateLabelPosition(group, minorLabels[index]);
  });
}

function updateSceneFourLabels(field, state) {
  if (!state.active) return;
  field.stars.forEach((star) => {
    updateLabelPosition(star, star.userData.label);
  });
  updateLabelPosition(field.distanceAnchor, field.distanceLabel);
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
  updateScene(0, celestialMotionTime);
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

const motionClock = new THREE.Clock();
let celestialMotionTime = 0;

function render() {
  const time = Math.min(audio.currentTime, SCENE_DURATION);
  celestialMotionTime += Math.min(motionClock.getDelta(), 0.05);
  updateScene(time, celestialMotionTime);
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

render();
}

bootstrap();
