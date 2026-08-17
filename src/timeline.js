export const FPS = 30;
export const SCENE_DURATION = 6.4;
export const TOTAL_FRAMES = Math.round(SCENE_DURATION * FPS);
export const WAVE_START = 4.3;
export const WAVE_END = 6.38;
export const PYRAMID_RAYS = [[0, 1], [0, 2], [0, 3]];

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
  if (time < WAVE_START || time >= WAVE_END) {
    return { active: false, progress: 0, radius: 0 };
  }
  const progress = (time - WAVE_START) / (WAVE_END - WAVE_START);
  return {
    active: true,
    progress,
    radius: 0.06 + Math.sin(progress * Math.PI) * 0.03,
  };
}
