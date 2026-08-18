import { describe, expect, it } from 'vitest';

import {
  PYRAMID_RAYS,
  SCENE_ONE_END,
  SCENE_TWO_END,
  SILENCE_START,
  WAVE_END,
  WAVE_START,
  getRecombinationState,
  getSceneThreeState,
  getSelectionAtTime,
  getLabelRevealAtTime,
  getCameraPushAtTime,
  SCENE_DURATION,
  TOTAL_FRAMES,
  getSubtitleAtTime,
  getWaveState,
} from '../src/timeline.js';

describe('scene one timeline', () => {
  it('maps the first two scenes onto the cleaned SRT cues', () => {
    expect(SCENE_ONE_END).toBe(6.4);
    expect(SCENE_TWO_END).toBe(10.733);
    expect(SCENE_DURATION).toBe(16.167);
    expect(TOTAL_FRAMES).toBe(485);
    expect(getSubtitleAtTime(0.1)).toBe('');
    expect(getSubtitleAtTime(0.14)).toBe('很久以前，宇宙是一锅');
    expect(getSubtitleAtTime(2.5)).toBe('滚烫的等离子体——');
    expect(getSubtitleAtTime(5.2)).toBe('声波，在其中来回震荡。');
    expect(getSubtitleAtTime(6.39)).toBe('');
    expect(getSubtitleAtTime(7.28)).toBe('三十八万年后，一切忽然');
    expect(getSubtitleAtTime(9.94)).toBe('安静。');
    expect(getSubtitleAtTime(10.733)).toBe('六合乍裂——那声波');
    expect(getSubtitleAtTime(12.18)).toBe('就此被冻结在黑');
    expect(getSubtitleAtTime(14.8)).toBe('暗深处。');
    expect(getSubtitleAtTime(SCENE_DURATION)).toBe('');
  });
});

describe('plasma focus and wave motion', () => {
  it('connects four selected nodes with three rays from one apex', () => {
    const focus = getSelectionAtTime(2.7);
    expect(focus.nodes).toHaveLength(4);
    expect(new Set(focus.nodes).size).toBe(4);
    expect(PYRAMID_RAYS).toEqual([[0, 1], [0, 2], [0, 3]]);
  });

  it('keeps the longitudinal wave visible on the final frame', () => {
    expect(getWaveState(WAVE_START - 0.01).active).toBe(false);
    const middle = getWaveState((WAVE_START + WAVE_END) / 2);
    expect(middle.active).toBe(true);
    expect(middle.progress).toBeGreaterThan(0);
    expect(middle.progress).toBeLessThan(1);
    expect(middle.radius).toBeLessThanOrEqual(0.09);
    expect(WAVE_END).toBe(SCENE_ONE_END);
    expect(getWaveState(WAVE_END)).toMatchObject({ active: true, progress: 1 });
    expect(getWaveState(SCENE_DURATION)).toMatchObject({ active: true, progress: 1 });
    expect(getWaveState(SCENE_DURATION + 0.01).active).toBe(false);
  });

  it('starts recombination on the exact final frame of scene one', () => {
    const firstFrame = getRecombinationState(SCENE_ONE_END);
    const lastFrame = getRecombinationState(SCENE_TWO_END);

    expect(firstFrame).toMatchObject({ active: true, progress: 0, absorption: 0, baryonVelocity: 1 });
    expect(firstFrame.waveTime).toBe(SCENE_ONE_END);
    expect(lastFrame.active).toBe(true);
    expect(lastFrame.progress).toBe(1);
    expect(lastFrame.absorption).toBeGreaterThan(0.99);
    expect(lastFrame.baryonVelocity).toBeLessThan(0.01);
    expect(lastFrame.waveTime).toBeGreaterThan(SCENE_ONE_END);
    expect(lastFrame.waveTime).toBeLessThan(SCENE_ONE_END + 1);
  });

  it('raises and holds the wave brightness when silence lands', () => {
    expect(getRecombinationState(SILENCE_START - 0.01).silenceBrightness).toBe(0);
    expect(getRecombinationState(SILENCE_START + 0.07).silenceBrightness).toBeGreaterThan(0);
    expect(getRecombinationState(SCENE_DURATION).silenceBrightness).toBe(1);
  });

  it('moves one wave through six sequential boundary impacts', () => {
    const firstFrame = getSceneThreeState(SCENE_TWO_END);
    const middle = getSceneThreeState(13.2);
    const lastFrame = getSceneThreeState(SCENE_DURATION);

    expect(firstFrame).toMatchObject({ active: true, progress: 0, reveal: 0, pathPosition: 0 });
    expect(middle.pathPosition).toBeGreaterThan(0);
    expect(middle.pathPosition).toBeLessThan(6);
    expect(lastFrame).toMatchObject({ active: true, progress: 1, pathPosition: 6, freeze: 1 });
  });

  it('counts each boundary only after the travelling wave reaches it', () => {
    const sceneStart = getSceneThreeState(SCENE_TWO_END);
    const beforeFirstImpact = getSceneThreeState(SCENE_TWO_END + 0.38 + (3.35 / 6) * 0.99);
    const firstImpact = getSceneThreeState(SCENE_TWO_END + 0.38 + (3.35 / 6));
    const finalImpact = getSceneThreeState(SCENE_TWO_END + 0.38 + 3.35);

    expect(sceneStart.completedImpacts).toBe(0);
    expect(beforeFirstImpact.completedImpacts).toBe(0);
    expect(firstImpact.completedImpacts).toBe(1);
    expect(finalImpact.completedImpacts).toBe(6);
  });

  it('removes the ripple only after the sixth impact while preserving the frozen core state', () => {
    const sixthImpactTime = SCENE_TWO_END + 0.38 + 3.35;
    const atSixthImpact = getSceneThreeState(sixthImpactTime);
    const duringFreeze = getSceneThreeState(SCENE_TWO_END + 4.2);
    const frozen = getSceneThreeState(SCENE_DURATION);

    expect(atSixthImpact.completedImpacts).toBe(6);
    expect(atSixthImpact.impactClock).toBeCloseTo(6, 8);
    expect(atSixthImpact.rippleStrength).toBe(1);
    expect(duringFreeze.rippleStrength).toBeGreaterThan(0);
    expect(duringFreeze.rippleStrength).toBeLessThan(1);
    expect(frozen.rippleStrength).toBe(0);
    expect(frozen.coreStrength).toBe(1);
    expect(frozen.pathPosition).toBe(6);
    expect(frozen.impactClock).toBeGreaterThan(6);
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
