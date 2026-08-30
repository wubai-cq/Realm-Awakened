export const FPS = 30;
export const SCENE_ONE_END = 6.4;
export const SCENE_TWO_END = 10.733;
export const SCENE_THREE_END = 16.167;
export const SCENE_FOUR_START = SCENE_THREE_END;
export const SCENE_FIVE_START = 24.6;
export const SCENE_FIVE_END = 36.667;
export const SCENE_DURATION = SCENE_FIVE_END;
export const TOTAL_FRAMES = Math.round(SCENE_DURATION * FPS);
export const SCENE_FOUR_START_OFFSET_LY = -83.2;
export const SCENE_FOUR_END_OFFSET_LY = -1.5;
export const WAVE_START = 4.3;
export const WAVE_END = SCENE_ONE_END;
export const SILENCE_START = 9.94;
export const PYRAMID_RAYS = [[0, 1], [0, 2], [0, 3]];
// Scene three needs a readable approach before the impact. The voice begins
// separated from the core, then crosses the gap quickly enough to feel like a
// collision instead of a state change.
export const SCENE_THREE_IMPACT_DELAY = 0.62;
export const SCENE_THREE_IMPACT_TRAVEL = 0.84;
export const SCENE_FOUR_MORPH_DURATION = SCENE_FIVE_START - SCENE_FOUR_START;

const FOCUS_SCHEDULE = [
  { start: 0, end: 1.35, nodes: [7, 0, 2, 5] },
  { start: 1.35, end: 2.45, nodes: [3, 1, 4, 10] },
  { start: 2.45, end: 3.45, nodes: [7, 5, 6, 11] },
  { start: 3.45, end: WAVE_START, nodes: [3, 8, 9, 10] },
  { start: WAVE_START, end: SCENE_DURATION, nodes: [7, 0, 2, 5] },
];

export const SUBTITLE_CUES = [
  { start: 0.14, end: 2, text: '很久以前，宇宙是一锅' },
  { start: 2, end: 4.3, text: '滚烫的等离子体——' },
  { start: 4.3, end: 6.38, text: '声波，在其中来回震荡。' },
  { start: 7.28, end: 9.94, text: '三十八万年后，一切忽然' },
  { start: 9.94, end: 10.733, text: '安静。' },
  { start: 10.733, end: 12.18, text: '六合乍裂——那声波' },
  { start: 12.18, end: 14.8, text: '就此被冻结在黑' },
  { start: 14.8, end: 15.4, text: '暗深处。' },
  { start: 16.14, end: 18.32, text: '它没有消失，只是化作一道' },
  { start: 18.32, end: 20.4, text: '极淡的印记，悄悄' },
  { start: 20.4, end: 22.36, text: '写进了星系与星系' },
  { start: 22.36, end: 23.66, text: '之间的距离里。' },
  { start: 24.6, end: 26.9, text: '往后的138亿年，宇' },
  { start: 26.9, end: 28.48, text: '宙都在把这道回声' },
  { start: 28.48, end: 32.18, text: '织成一张网，而我们都是' },
  { start: 32.18, end: 35, text: '网上那一点被轻轻托' },
  { start: 35, end: 35.62, text: '起的光。' },
];

export function getSubtitleAtTime(time) {
  return SUBTITLE_CUES.find((cue) => time >= cue.start && time < cue.end)?.text ?? '';
}

export function getSelectionAtTime(time) {
  return FOCUS_SCHEDULE.find((focus) => time >= focus.start && time < focus.end)
    ?? FOCUS_SCHEDULE[FOCUS_SCHEDULE.length - 1];
}

export function getLabelRevealAtTime(time, focusNodes, nodeCount, minorCount) {
  const beat = Math.floor(Math.max(0, time) / 0.55);
  const main = new Set([focusNodes[beat % focusNodes.length]]);
  if (beat % 3 === 1) main.add(focusNodes[(beat + 2) % focusNodes.length]);
  if (beat % 4 === 2) main.add((beat * 5 + 1) % nodeCount);
  return {
    main: [...main],
    minor: beat % 2 === 0 ? (beat * 3) % minorCount : null,
  };
}

export function getCameraPushAtTime(time) {
  return smoothRange(time, 0.85, 1.6) + smoothRange(time, 2.75, 3.55);
}

function smoothRange(time, start, end) {
  const progress = Math.min(1, Math.max(0, (time - start) / (end - start)));
  return progress * progress * (3 - 2 * progress);
}

export function getWaveState(time) {
  if (time < WAVE_START || time > SCENE_DURATION) {
    return { active: false, progress: 0, radius: 0 };
  }
  const progress = Math.min(1, (time - WAVE_START) / (WAVE_END - WAVE_START));
  return {
    active: true,
    progress,
    radius: 0.06 + Math.sin(progress * Math.PI) * 0.03,
  };
}

export function getRecombinationState(time) {
  const elapsed = Math.max(0, time - SCENE_ONE_END);
  const duration = SCENE_TWO_END - SCENE_ONE_END;
  const boundedElapsed = Math.min(duration, elapsed);
  const progress = boundedElapsed / duration;
  const dampingRate = 1.35;
  const baryonVelocity = Math.exp(-dampingRate * boundedElapsed);

  return {
    active: time >= SCENE_ONE_END && time <= SCENE_TWO_END,
    progress,
    absorption: progress,
    baryonVelocity,
    silenceBrightness: smoothRange(time, SILENCE_START, SILENCE_START + 0.14),
    waveTime: SCENE_ONE_END + (1 - baryonVelocity) / dampingRate,
  };
}

export function getSceneThreeState(time) {
  const elapsed = Math.max(0, time - SCENE_TWO_END);
  const duration = SCENE_THREE_END - SCENE_TWO_END;
  const progress = Math.min(1, elapsed / duration);
  const impactClock = Math.max(0, (elapsed - SCENE_THREE_IMPACT_DELAY) / SCENE_THREE_IMPACT_TRAVEL);
  const pathPosition = Math.min(1, impactClock);
  const approachProgress = pathPosition;
  const surfaceProgress = Math.max(0, impactClock - 1);
  const freeze = smoothRange(time, SCENE_TWO_END + 3.8, SCENE_TWO_END + 4.65);

  return {
    active: time >= SCENE_TWO_END && time <= SCENE_THREE_END,
    progress,
    reveal: smoothRange(time, SCENE_TWO_END, SCENE_TWO_END + 0.45),
    pathPosition,
    approachProgress,
    surfaceProgress,
    impactClock,
    completedImpacts: Math.floor(pathPosition + 1e-9),
    impactIndex: 0,
    segmentProgress: pathPosition >= 1 ? 1 : pathPosition,
    freeze,
    rippleStrength: 1 - freeze,
    coreStrength: 1,
  };
}

export function getSceneFourMorphProgress(time) {
  const t = Math.min(1, Math.max(0, (time - SCENE_FOUR_START) / SCENE_FOUR_MORPH_DURATION));
  return t * t * (3 - 2 * t);
}

export function getSceneFourState(time) {
  const elapsed = Math.max(0, time - SCENE_FOUR_START);
  const duration = SCENE_FOUR_MORPH_DURATION;
  const progress = Math.min(1, elapsed / duration);
  const constellationReveal = smoothRange(time, SCENE_FOUR_START + 0.28, SCENE_FOUR_START + 2.2);
  const lineReveal = time >= SCENE_FOUR_START ? 1 : 0;
  const projectionMorph = smoothRange(time, SCENE_FOUR_START + 0.72, SCENE_FOUR_START + 2.72);
  const flatLineOpacity = 0.78 * (1 - 0.35 * projectionMorph);
  const depthLineOpacity = 0.35 + 0.65 * projectionMorph;
  const imprintFade = smoothRange(time, SCENE_FOUR_START + 1.25, SCENE_FOUR_START + 4.8);
  const distanceReveal = smoothRange(time, SCENE_FOUR_START + 2.15, SCENE_FOUR_START + 4.1);
  const parallaxProgress = smoothRange(
    time,
    SCENE_FOUR_START + 1 / FPS,
    SCENE_FIVE_START - 1 / FPS,
  );
  const viewOffsetLy = SCENE_FOUR_START_OFFSET_LY
    + (SCENE_FOUR_END_OFFSET_LY - SCENE_FOUR_START_OFFSET_LY) * parallaxProgress;

  const morphProgress = getSceneFourMorphProgress(time);

  return {
    active: time >= SCENE_FOUR_START && time <= SCENE_FIVE_START,
    progress,
    reveal: smoothRange(time, SCENE_FOUR_START, SCENE_FOUR_START + 0.72),
    constellationReveal,
    lineReveal,
    projectionMorph,
    flatLineOpacity: 0.78 * (1 - morphProgress),
    depthLineOpacity,
    auxiliaryMorph: projectionMorph,
    imprintFade,
    distanceReveal,
    parallaxProgress,
    viewOffsetLy,
    morphProgress,
  };
}

// Scene five beats: the frozen imprint re-disperses into a 3D Voronoi foam
// cube, the finished foam hops upward while the cube turns a third of a turn,
// the foam cells weave into a white neural web that cools to blue, and the
// nodes ignite in a distributed pattern as the narration reaches the lifted
// point of light.
export const SCENE_FIVE_ASSEMBLY_END = 28.8;
export const SCENE_FIVE_HOP_START = 28.85;
export const SCENE_FIVE_HOP_FADE_START = 31.6;
export const SCENE_FIVE_HOP_END = 32.2;
export const SCENE_FIVE_ROTATION_END = 31.9;
export const SCENE_FIVE_NET_START = 28.48;
export const SCENE_FIVE_NET_END = 31.38;
export const SCENE_FIVE_BLUE_START = 31.7;
export const SCENE_FIVE_BLUE_END = 33.3;
export const SCENE_FIVE_THIRD_TURN = Math.PI * 2 / 3;
export const SCENE_FIVE_POINT_LIGHT_COLOR = 0xdde9ff;
export const SCENE_FIVE_NETWORK_STYLE = 'central-spine-branches';

export function getSceneFiveState(time) {
  const progress = Math.min(1, Math.max(0, (time - SCENE_FIVE_START) / (SCENE_FIVE_END - SCENE_FIVE_START)));
  const dispersal = smoothRange(time, SCENE_FIVE_START + 0.08, SCENE_FIVE_ASSEMBLY_END);
  const hop = smoothRange(time, SCENE_FIVE_HOP_START, SCENE_FIVE_HOP_START + 0.5)
    * (1 - smoothRange(time, SCENE_FIVE_HOP_FADE_START, SCENE_FIVE_HOP_END));
  const distributedLight = smoothRange(time, 32.18, 35.62);
  return {
    active: time >= SCENE_FIVE_START && time <= SCENE_FIVE_END,
    progress,
    dispersal,
    hop,
    hopClock: Math.max(0, time - SCENE_FIVE_HOP_START),
    rotation: smoothRange(time, SCENE_FIVE_HOP_START + 0.05, SCENE_FIVE_ROTATION_END) * SCENE_FIVE_THIRD_TURN,
    networkReveal: smoothRange(time, SCENE_FIVE_NET_START, SCENE_FIVE_NET_END),
    lineColorShift: smoothRange(time, SCENE_FIVE_BLUE_START, SCENE_FIVE_BLUE_END),
    distributedLight,
    lift: smoothRange(time, 32.18, 35.3),
    reveal: 1,
  };
}
