import { it, expect } from 'vitest';
import FMock from '../src/index';

// function type
it('mock type', () => {
  expect(FMock.mock).toBeTypeOf('function');
});

// test params
it('mock params', () => {
  expect(FMock.mock(null)).toBe('null');
  expect(FMock.mock(undefined)).toBe('undefined');
  expect(FMock.mock([1, 2])).toBeInstanceOf(Array);
  expect(FMock.mock(function() {
    return 123;
  })).toBeTypeOf('number');
  expect(FMock.mock('@string')).toBeTypeOf('string');
  expect(FMock.mock('@integer')).toBeTypeOf('number');
  expect(FMock.mock('plainString')).toBeTypeOf('string');
  expect(FMock.mock({
    a: '111'
  })).toBeTypeOf('object');
});
