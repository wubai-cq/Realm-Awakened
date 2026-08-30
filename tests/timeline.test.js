import { describe, expect, it } from 'vitest';

import {
  PYRAMID_RAYS,
  SCENE_ONE_END,
  SCENE_THREE_END,
  SCENE_FOUR_START,
  SCENE_THREE_IMPACT_DELAY,
  SCENE_THREE_IMPACT_TRAVEL,
  SCENE_TWO_END,
  SILENCE_START,
  WAVE_END,
  WAVE_START,
  getRecombinationState,
  getSceneFourState,
  getSceneThreeState,
  getSelectionAtTime,
  getLabelRevealAtTime,
  getCameraPushAtTime,
  SCENE_DURATION,
  TOTAL_FRAMES,
  getSubtitleAtTime,
  getWaveState,
  SCENE_FIVE_START,
  SCENE_FIVE_THIRD_TURN,
  SCENE_FIVE_POINT_LIGHT_COLOR,
  SCENE_FIVE_NETWORK_STYLE,
  getSceneFiveState,
  SCENE_SIX_START,
  SCENE_SIX_END,
  SCENE_SIX_GRAZE,
  SCENE_SIX_BUTTERFLY_START,
  SCENE_SIX_BUTTERFLY_END,
  SCENE_TITLES_START,
  SCENE_TITLES_MID,
  TITLE_TEXT_ONE,
  TITLE_TEXT_TWO,
  getSceneSixState,
} from '../src/timeline.js';

describe('scene one timeline', () => {
  it('maps the first two scenes onto the cleaned SRT cues', () => {
    expect(SCENE_ONE_END).toBe(6.4);
    expect(SCENE_TWO_END).toBe(10.733);
    expect(SCENE_THREE_END).toBe(16.167);
    expect(SCENE_FOUR_START).toBe(SCENE_THREE_END);
    expect(SCENE_DURATION).toBe(73.25);
    expect(TOTAL_FRAMES).toBe(2198);
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
    expect(getSubtitleAtTime(16.2)).toBe('它没有消失，只是化作一道');
    expect(getSubtitleAtTime(18.5)).toBe('极淡的印记，悄悄');
    expect(getSubtitleAtTime(21.1)).toBe('写进了星系与星系');
    expect(getSubtitleAtTime(22.8)).toBe('之间的距离里。');
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

  it('moves one wave into a single spherical 六合 core', () => {
    const firstFrame = getSceneThreeState(SCENE_TWO_END);
    const middle = getSceneThreeState(13.2);
    const lastFrame = getSceneThreeState(SCENE_THREE_END);

    expect(firstFrame).toMatchObject({ active: true, progress: 0, reveal: 0, pathPosition: 0 });
    expect(middle.pathPosition).toBe(1);
    expect(lastFrame).toMatchObject({ active: true, progress: 1, pathPosition: 1, freeze: 1 });
    expect(getSceneThreeState(SCENE_THREE_END + 1 / 30).active).toBe(false);
  });

  it('counts the impact only after the travelling wave reaches the core', () => {
    const sceneStart = getSceneThreeState(SCENE_TWO_END);
    const beforeImpact = getSceneThreeState(SCENE_TWO_END + SCENE_THREE_IMPACT_DELAY + SCENE_THREE_IMPACT_TRAVEL * 0.99);
    const impact = getSceneThreeState(SCENE_TWO_END + SCENE_THREE_IMPACT_DELAY + SCENE_THREE_IMPACT_TRAVEL);

    expect(sceneStart.completedImpacts).toBe(0);
    expect(beforeImpact.completedImpacts).toBe(0);
    expect(impact.completedImpacts).toBe(1);
  });

  it('lets the surface ripple fade into the frozen core state', () => {
    const impactTime = SCENE_TWO_END + SCENE_THREE_IMPACT_DELAY + SCENE_THREE_IMPACT_TRAVEL;
    const atImpact = getSceneThreeState(impactTime);
    const duringFreeze = getSceneThreeState(SCENE_TWO_END + 4.2);
    const frozen = getSceneThreeState(SCENE_THREE_END);

    expect(atImpact.completedImpacts).toBe(1);
    expect(atImpact.impactClock).toBeCloseTo(1, 8);
    expect(atImpact.rippleStrength).toBe(1);
    expect(duringFreeze.rippleStrength).toBeGreaterThan(0);
    expect(duringFreeze.rippleStrength).toBeLessThan(1);
    expect(frozen.rippleStrength).toBe(0);
    expect(frozen.coreStrength).toBe(1);
    expect(frozen.pathPosition).toBe(1);
    expect(frozen.impactClock).toBeGreaterThan(1);
  });

  it('starts the Orion distance-imprint scene after the frozen core endpoint', () => {
    const firstFrame = getSceneFourState(SCENE_FOUR_START);
    const reveal = getSceneFourState(SCENE_FOUR_START + 1.4);
    const lastFrame = getSceneFourState(SCENE_FIVE_START);

    expect(firstFrame).toMatchObject({
      active: true,
      progress: 0,
      reveal: 0,
      lineReveal: 1,
      projectionMorph: 0,
    });
    expect(firstFrame.flatLineOpacity).toBeGreaterThan(0);
    expect(firstFrame.depthLineOpacity).toBeGreaterThan(0);
    expect(reveal.constellationReveal).toBeGreaterThan(0);
    expect(reveal.lineReveal).toBeGreaterThan(0);
    expect(reveal.projectionMorph).toBeGreaterThan(0);
    expect(reveal.projectionMorph).toBeLessThan(1);
    expect(reveal.flatLineOpacity).toBeLessThan(firstFrame.flatLineOpacity);
    expect(reveal.depthLineOpacity).toBeGreaterThan(firstFrame.depthLineOpacity);
    expect(lastFrame.flatLineOpacity).toBe(0);
    expect(lastFrame.depthLineOpacity).toBeGreaterThan(0);
    expect(lastFrame).toMatchObject({
      active: true,
      progress: 1,
      imprintFade: 1,
      distanceReveal: 1,
      projectionMorph: 1,
    });
  });

  it('moves the scene-four observation point from left to right after the opening reveal', () => {
    const firstFrame = getSceneFourState(SCENE_FOUR_START);
    const middleFrame = getSceneFourState((SCENE_FOUR_START + SCENE_FIVE_START) / 2);
    const lastFrame = getSceneFourState(SCENE_FIVE_START);

    expect(firstFrame.parallaxProgress).toBe(0);
    expect(middleFrame.parallaxProgress).toBeGreaterThan(0);
    expect(middleFrame.parallaxProgress).toBeLessThan(1);
    expect(lastFrame.parallaxProgress).toBe(1);
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

describe('scene five timeline', () => {
  it('uses Meissa star light for the lifted point cue', () => {
    expect(SCENE_FIVE_POINT_LIGHT_COLOR).toBe(0xdde9ff);
  });

  it('selects the reference-inspired central spine network', () => {
    expect(SCENE_FIVE_NETWORK_STYLE).toBe('central-spine-branches');
  });

  it('keeps scene five locked to 00:24.600-00:36.667', () => {
    expect(SCENE_FIVE_START).toBe(24.6);
    expect(getSceneFiveState(24.6).active).toBe(true);
    expect(getSceneFiveState(36.667).active).toBe(true);
    expect(getSceneFiveState(24.59).active).toBe(false);
    expect(getSceneFiveState(36.668).active).toBe(false);
  });

  it('walks the foam through assembly, hop, weave, cool-down and ignition', () => {
    const assembling = getSceneFiveState(SCENE_FIVE_START + 1);
    expect(assembling.dispersal).toBeGreaterThan(0);
    expect(assembling.dispersal).toBeLessThan(1);
    expect(assembling.rotation).toBe(0);
    expect(assembling.networkReveal).toBe(0);

    const formed = getSceneFiveState(28.8);
    expect(formed.dispersal).toBe(1);

    const hopping = getSceneFiveState(30);
    expect(hopping.hop).toBeGreaterThan(0);
    expect(hopping.hopClock).toBeGreaterThan(0);
    expect(hopping.rotation).toBeGreaterThan(0);
    expect(hopping.rotation).toBeLessThan(SCENE_FIVE_THIRD_TURN);

    const turned = getSceneFiveState(32);
    expect(turned.rotation).toBeCloseTo(SCENE_FIVE_THIRD_TURN, 6);

    const weaving = getSceneFiveState(31);
    expect(weaving.networkReveal).toBeGreaterThan(0);
    expect(weaving.networkReveal).toBeLessThan(1);
    expect(weaving.lineColorShift).toBe(0);

    const blue = getSceneFiveState(33.4);
    expect(blue.lineColorShift).toBe(1);

    const firstLight = getSceneFiveState(32.18);
    expect(firstLight.distributedLight).toBe(0);
    const lit = getSceneFiveState(35.62);
    expect(lit.distributedLight).toBe(1);
    expect(lit.rotation).toBeCloseTo(SCENE_FIVE_THIRD_TURN, 6);
  });

  it('lights the net exactly on the narration cue for the lifted point of light', () => {
    expect(getSceneFiveState(32.17).distributedLight).toBe(0);
    expect(getSceneFiveState(33.9).distributedLight).toBeGreaterThan(0.3);
    expect(getSceneFiveState(33.9).lift).toBeGreaterThan(0);
  });
});

describe('scene six timeline', () => {
  it('keeps scene six locked to 00:36.667-01:13.250', () => {
    expect(SCENE_SIX_START).toBe(36.667);
    expect(SCENE_SIX_END).toBe(73.25);
    expect(getSceneSixState(36.667).active).toBe(true);
    expect(getSceneSixState(73.25).active).toBe(true);
    expect(getSceneSixState(36.66).active).toBe(false);
    expect(getSceneSixState(73.26).active).toBe(false);
  });

  it('shows two particle-text title cards in the BGM-only tail', () => {
    expect(SCENE_TITLES_START).toBe(SCENE_SIX_BUTTERFLY_END);
    expect(SCENE_TITLES_START).toBe(67.2);
    expect(SCENE_TITLES_MID).toBe(69.9);
    expect(SCENE_TITLES_MID).toBeLessThan(SCENE_SIX_END);
    expect(TITLE_TEXT_ONE).toBe('六合初鸣');
    expect(TITLE_TEXT_TWO).toBe('致角落里的每一处声音');
    // each card gets well over a second of hold: cue one assembles by ~68.4
    // and hands over at 69.9, cue two lands by ~71.1 and holds to the cut
    expect(SCENE_TITLES_MID - SCENE_TITLES_START).toBeGreaterThan(2.5);
    expect(SCENE_SIX_END - SCENE_TITLES_MID).toBeGreaterThan(3);
  });

  it('sends the tail swarm to the flowers only after the remnant settles', () => {
    expect(SCENE_SIX_BUTTERFLY_START).toBe(60);
    expect(SCENE_SIX_BUTTERFLY_END).toBe(67.2);
    expect(getSceneSixState(59.9).butterfly).toBe(0);
    expect(getSceneSixState(60.5).butterfly).toBeGreaterThan(0);
    expect(getSceneSixState(60.5).butterfly).toBeLessThan(1);
    expect(getSceneSixState(61.1).butterfly).toBe(1);
    const settled = getSceneSixState(60);
    expect(settled.coresFade).toBe(1);
    expect(settled.bloom).toBe(1);
  });

  it('opens with an empty overlay so scene five owns the shared first frame', () => {
    const firstFrame = getSceneSixState(SCENE_SIX_START);
    expect(firstFrame.bloom).toBe(0);
    expect(firstFrame.coresFade).toBe(0);
  });

  it('blooms the flowers after a short hold and finishes before the cores arrive', () => {
    const hold = getSceneSixState(SCENE_SIX_START + 0.1);
    expect(hold.bloom).toBe(0);

    const blooming = getSceneSixState(SCENE_SIX_START + 1.3);
    expect(blooming.bloom).toBeGreaterThan(0);
    expect(blooming.bloom).toBeLessThan(1);

    const fullBloom = getSceneSixState(SCENE_SIX_START + 2.6);
    expect(fullBloom.bloom).toBe(1);
    expect(fullBloom.coresFade).toBeLessThan(1);
  });

  it('grazes only after a long separated approach across the narration end', () => {
    // Measured from the ported Toomre integrator: the cores fade in still 12
    // separation units apart, close for ≈6.3s and first touch periapsis at
    // ≈45.48s — after the 42.2s narration has already finished.
    expect(SCENE_SIX_GRAZE).toBeCloseTo(SCENE_SIX_START + 8.81, 1);
    expect(SCENE_SIX_GRAZE).toBeCloseTo(45.48, 1);
    expect(SCENE_SIX_GRAZE).toBeGreaterThan(42.2);
    expect(SCENE_SIX_GRAZE).toBeLessThan(SCENE_SIX_END);

    const beforeGraze = getSceneSixState(SCENE_SIX_START + 6);
    expect(beforeGraze.coresFade).toBe(1);

    const atGraze = getSceneSixState(SCENE_SIX_GRAZE);
    expect(atGraze.bloom).toBe(1);
    expect(atGraze.coresFade).toBe(1);
  });
});
