import { describe, expect, it } from 'vitest';
import { getDopplerValues } from '../src/wave-physics.js';

describe('getDopplerValues', () => {
  it('derives the observed frequency from the moving wave phase', () => {
    const start = getDopplerValues(0);
    const quarter = getDopplerValues(0.25);

    expect(quarter.sourceFrequency).not.toBe(start.sourceFrequency);
    expect(quarter.velocityRatio).not.toBe(start.velocityRatio);
    expect(quarter.observedFrequency).toBeCloseTo(
      quarter.sourceFrequency / (1 - quarter.velocityRatio),
      8,
    );
  });

  it('clamps progress so all displayed values stay finite', () => {
    expect(getDopplerValues(-2)).toEqual(getDopplerValues(0));
    expect(getDopplerValues(3)).toEqual(getDopplerValues(1));
    expect(Number.isFinite(getDopplerValues(0.75).observedFrequency)).toBe(true);
  });
});
