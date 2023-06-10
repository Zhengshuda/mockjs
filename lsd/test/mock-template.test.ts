import { it, expect, describe } from 'vitest';
import FMock from '../src/index';
import template1 from './template1.json';
import template2 from './template2.json';


describe('测试 json模板', () => {
  it('传递参数', () => {
    expect(FMock.mock(template1)).toEqual({
      integer: expect.any(Number), 
      array2: ['1', 2, '1', 2],
    });
  });

  it('不传递参数', () => {
    expect(FMock.mock(template2)).toEqual({
      integer: expect.any(Number),
      array1: [1, 2, 3],
      obj1: {
        phone: expect.stringMatching(/^1[34578]\d{9}$/),
      },
      count: 3
    });
  });
});
