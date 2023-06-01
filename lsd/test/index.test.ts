import { it, expect } from 'vitest';
import FMock from '../src/index';

it('integer', () => {
  expect(FMock.Random.integer).toBeInstanceOf(Function);
});
