import { it, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

// function type
it('boolean type', () => {
  expect(Random.boolean).toBeTypeOf('function');
  expect(Random.boolean()).toBeTypeOf('boolean');
});
