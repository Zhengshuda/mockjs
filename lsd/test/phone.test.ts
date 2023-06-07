import { it, expect } from 'vitest';
import FMock from '../src/index';
const Mock = FMock.mock;

// function type
it('phone type', () => {
  expect(Mock('@phone')).toBeTypeOf('string');
});

// test params
it('phone test', () => {
  const res1 = Mock('@phone');
  expect(res1).toMatch(/^1[34578]\d{9}$/);
});
