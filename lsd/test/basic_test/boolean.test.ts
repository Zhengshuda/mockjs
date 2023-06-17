import { it, expect } from 'vitest';
import FMock from '../../src/index';
const Mock = FMock.mock;

// function type
it('boolean type', () => {
  expect(Mock('@boolean')).toBeTypeOf('boolean');
});