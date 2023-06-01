import { it, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

// function type
it('integer type', () => {
  expect(Random.integer).toBeTypeOf('function');
  expect(Random.integer()).toBeTypeOf('number');
});

// test params
it('integer params', () => {
  const int1 = Random.integer();
  expect(int1).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  expect(int1).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);

  const int2 = Random.integer({ min: 5 });
  expect(int2).toBeGreaterThanOrEqual(5);

  const int3 = Random.integer({ min: 10, max: 100 });
  expect(int3).toBeGreaterThanOrEqual(10);
  expect(int3).toBeLessThanOrEqual(100);
});
