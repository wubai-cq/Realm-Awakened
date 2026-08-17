import { describe, expect, it } from 'vitest';

import {
  chladniValue,
  chladniVolumeValue,
} from '../src/chladni.js';

describe('Chladni nodal pattern', () => {
  it('creates nodal intersections and antisymmetric lobes', () => {
    expect(chladniValue(0, 0, 2, 3)).toBeCloseTo(0, 8);
    expect(chladniValue(0.5, 0.5, 2, 3)).toBeCloseTo(0, 8);
    const lobe = chladniValue(0.25, 0.5, 2, 3);
    expect(Math.abs(lobe)).toBeGreaterThan(0.5);
    expect(chladniValue(0.5, 0.25, 2, 3)).toBeCloseTo(-lobe, 8);
  });

  it('creates a three-dimensional Chladni nodal field', () => {
    expect(chladniVolumeValue(0, 0, 0, 2, 3, 4)).toBeCloseTo(0, 8);
    expect(chladniVolumeValue(0.25, 0.5, 0.75, 2, 3, 4)).toBeCloseTo(-1, 8);
  });
});
