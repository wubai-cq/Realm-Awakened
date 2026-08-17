import { describe, expect, it } from 'vitest';

import {
  PYRAMID_RAYS,
  WAVE_END,
  WAVE_START,
  getSelectionAtTime,
  getLabelRevealAtTime,
  getCameraPushAtTime,
  SCENE_DURATION,
  TOTAL_FRAMES,
  getSubtitleAtTime,
  getWaveState,
} from '../src/timeline.js';

describe('scene one timeline', () => {
  it('maps the cleaned SRT cues onto exactly 192 frames', () => {
    expect(SCENE_DURATION).toBe(6.4);
    expect(TOTAL_FRAMES).toBe(192);
    expect(getSubtitleAtTime(0.1)).toBe('');
    expect(getSubtitleAtTime(0.14)).toBe('很久以前，宇宙是一锅');
    expect(getSubtitleAtTime(2.5)).toBe('滚烫的等离子体——');
    expect(getSubtitleAtTime(5.2)).toBe('声波，在其中来回震荡。');
    expect(getSubtitleAtTime(6.39)).toBe('');
  });
});

describe('plasma focus and wave motion', () => {
  it('connects four selected nodes with three rays from one apex', () => {
    const focus = getSelectionAtTime(2.7);
    expect(focus.nodes).toHaveLength(4);
    expect(new Set(focus.nodes).size).toBe(4);
    expect(PYRAMID_RAYS).toEqual([[0, 1], [0, 2], [0, 3]]);
  });

  it('activates a small longitudinal wave only during the wave cue', () => {
    expect(getWaveState(WAVE_START - 0.01).active).toBe(false);
    const middle = getWaveState((WAVE_START + WAVE_END) / 2);
    expect(middle.active).toBe(true);
    expect(middle.progress).toBeGreaterThan(0);
    expect(middle.progress).toBeLessThan(1);
    expect(middle.radius).toBeLessThanOrEqual(0.09);
    expect(getWaveState(WAVE_END).active).toBe(false);
  });

  it('reveals a sparse label subset that jumps on the next beat', () => {
    const focus = [7, 0, 2, 5];
    const first = getLabelRevealAtTime(0, focus, 12, 8);
    const next = getLabelRevealAtTime(0.56, focus, 12, 8);
    expect(first.main.length).toBeGreaterThan(0);
    expect(first.main.length).toBeLessThanOrEqual(3);
    expect(next.main).not.toEqual(first.main);
    expect(first.minor).toBe(0);
    expect(next.minor).toBeNull();
  });

  it('applies two cumulative camera push-ins before the wave cue', () => {
    expect(getCameraPushAtTime(0)).toBe(0);
    expect(getCameraPushAtTime(1.7)).toBeCloseTo(1, 5);
    expect(getCameraPushAtTime(2.4)).toBeCloseTo(1, 5);
    expect(getCameraPushAtTime(3.7)).toBeCloseTo(2, 5);
  });
});
