import { it, expect } from 'vitest';
import FMock from '../src/index';
const Mock = FMock.mock;

it('integer', () => {
  expect(Mock('@integer')).toBeTypeOf('number');
});
