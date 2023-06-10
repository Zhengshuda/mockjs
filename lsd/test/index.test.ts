import { it, expect } from 'vitest';
import FMock from '../src/index';
FMock.setEnv('NODE_ENV', 'development');
const Mock = FMock.mock;

it('integer', () => {
  expect(Mock('@integer')).toBeTypeOf('number');
});
