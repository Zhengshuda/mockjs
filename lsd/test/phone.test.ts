import { it, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

// function type
it('phone type', () => {
  expect(Random.phone).toBeTypeOf('function');
  expect(Random.phone()).toBeTypeOf('string');
});

// test params
it('phone test', () => {
  const res1 = Random.phone();
  expect(res1).toMatch(/^1[34578]\d{9}$/);
});
