import { it, expectTypeOf, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

it('date type', () => {
  expectTypeOf(Random.date).toBeFunction();
  expectTypeOf(Random.date()).toBeString();
  const res1 = Random.date('M-D');
  expect(res1.split('-').length).toEqual(2);
});

it('time type', () => {
  expectTypeOf(Random.time).toBeFunction();
  expectTypeOf(Random.time()).toBeString();
  const res1 = Random.time('m-s');
  expect(res1.split('-').length).toEqual(2);
});
