import { it, expectTypeOf, expect } from 'vitest';
import FMock from '../src/index';
const Mock = FMock.mock;

it('date type', () => {
  expectTypeOf(Mock('@date')).toBeString();
  const res1 = Mock('@date|format=M-D');
  expect(res1.split('-').length).toEqual(2);
});

it('time type', () => {
  expectTypeOf(Mock('@time')).toBeString();
  const res1 = Mock('@time|format=m-s');
  expect(res1.split('-').length).toEqual(2);
});
