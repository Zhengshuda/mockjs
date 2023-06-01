import { it, expect } from 'vitest';
import FMock from '../src/index';

// function type
it('mock template', () => {
  expect(FMock.mock({
    'integer|min=4&max=10': '@integer',
    phone: '@phone',
    array1: [1, 2, 3],
    'array2|count=2': ['1', 2],
    obj1: {
      phone: '@phone',
    },
    'func1|param1=hello&param2=world': function({param1, param2}) {
      return param1 + ' ' + param2;
    },
    count: 3
  })).toEqual({
    integer: expect.any(Number), 
    phone: expect.stringMatching(/^1[34578]\d{9}$/),
    array1: [1, 2, 3],
    array2: ['1', 2, '1', 2],
    obj1: {
      phone: expect.stringMatching(/^1[34578]\d{9}$/),
    },
    func1: expect.stringMatching('hello world'),
    count: 3,
  });
});

// test params
// it('mock json file', () => {
//   expect(FMock.mock(null)).toBe('null');
//   expect(FMock.mock(undefined)).toBe('undefined');
//   expect(FMock.mock([1, 2])).toBeInstanceOf(Array);
//   expect(FMock.mock(function() {
//     return 123;
//   })).toBeTypeOf('number');
//   expect(FMock.mock('@string')).toBeTypeOf('string');
//   expect(FMock.mock('@integer')).toBeTypeOf('number');
//   expect(FMock.mock('plainString')).toBeTypeOf('string');
//   expect(FMock.mock({
//     a: '111'
//   })).toBeTypeOf('object');
// });
