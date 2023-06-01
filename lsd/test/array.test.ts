import { it, expect } from 'vitest';
import FMock from '../src/index';
import { ARRAY_MAX_COUNT } from '../src/utils/const';
const mock = FMock.mock;

// function type
it('array type', () => {
  expect(mock).toBeTypeOf('function');
  expect(mock([1, 2, 3])).toBeInstanceOf(Array);
});

// test params
it('array params', () => {
  const res1 = mock([1, 2, 3]);
  expect(res1).toEqual([1, 2, 3]);

  const res2 = mock({
    'arr|min=2&max=7': [1, 2]
  });
  expect(res2.arr.length).toBeLessThanOrEqual(14);
  expect(res2.arr.length).toBeGreaterThanOrEqual(4);

  const res3 = mock({
    'arr|count=3': [{
      'integer|min=4&max=10': '@integer',
      phone: '@phone',
    }]
  });
  expect(res3).toEqual({
    arr: expect.arrayContaining([{
      integer: expect.any(Number), 
      phone: expect.stringMatching(/^1[34578]\d{9}$/)
    }])
  });
});

// test wrong params
it('array wrong params', () => {
  const res1 = mock({
    'arr|min=-1': [1, 2]
  });
  expect(res1.arr).toEqual([1, 2]);

  const res2 = mock({
    'arr|max=1001': [1]
  });
  expect(res2.arr.length).toBeLessThanOrEqual(ARRAY_MAX_COUNT);

  expect(mock([])).toBeInstanceOf(Array);

  const res3 = mock(['@phone']);
  expect(res3).toEqual([
    expect.stringMatching(/^1[34578]\d{9}$/)
  ])

});
