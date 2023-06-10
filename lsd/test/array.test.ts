import { it, expect, describe } from 'vitest';
import FMock from '../src/index';
import { ARRAY_MAX_COUNT, ARRAY_MIN_COUNT } from 'src/utils/const';
const mock = FMock.mock;
FMock.setEnv('NODE_ENV', 'development');

describe('Normal function Test', () => {
  it('生成数组类型', () => {
    expect(mock([1, 2, 3])).toBeInstanceOf(Array);
  });

  it('模板会生成对应的数据类型', () => {
    const res3 = mock(['@phone']);
    expect(res3).toEqual([
      expect.stringMatching(/^1[34578]\d{9}$/)
    ])
  });
});

// test params
describe('test params', () => {
  it('不传参默认不重复', () => {
    const res1 = mock([1, 2, 3]);
    expect(res1).toEqual([1, 2, 3]);

    const res2 = mock({
      'arr': []
    });
    expect(res2.arr).toEqual([]);
  });

  it('测试min 和 max', () => {
    const res1 = mock({
      'arr|min=2&max=7': [1, 2]
    });
    expect(res1.arr.length).toBeLessThanOrEqual(14);
    expect(res1.arr.length).toBeGreaterThanOrEqual(4);
  })

  it('测试min', () => {
    const res2 = mock({
      'arr|min=2': [1, 2]
    });
    expect(res2.arr.length).toBeGreaterThanOrEqual(2 * 2);
  })

  it('测试max', () => {
    const res3 = mock({
      'arr|max=8': [1, 2]
    });
    expect(res3.arr.length).toBeLessThanOrEqual(2 * 8);
  })

  it('测试 count', () => {
    const res3 = mock({
      'arr|count=3': [{
        'integer|min=4&max=10': '@integer',
        phone: '@phone',
      }]
    });
    expect(res3.arr.length).toBe(3);
    expect(res3).toEqual({
      arr: expect.arrayContaining([{
        integer: expect.any(Number),
        phone: expect.stringMatching(/^1[34578]\d{9}$/)
      }])
    });
  })
})

describe('测试错误参数传入', () => {
  it('min传参错误', () => {
    const res1 = mock({
      'arr|min=-1': [1, 2]
    });
    expect(res1.arr.length).toBeGreaterThanOrEqual(2 * ARRAY_MIN_COUNT);
  });

  it('max传参错误', () => {
    // 超过最大值范围
    const count1 = ARRAY_MAX_COUNT + 1;
    const res1 = mock({
      [`arr|max=${count1}`]: [1]
    });
    expect(res1.arr.length).toBeLessThanOrEqual(ARRAY_MAX_COUNT * 1);
    // 小于最小值
    const res2 = mock({
      'arr|max=-1': [1]
    });
    expect(res2.arr.length).toBeLessThanOrEqual(ARRAY_MAX_COUNT * 1);

    const res3 = mock({
      'arr|max=30&min=100': [1]
    });
    expect(res3.arr.length).toBeLessThanOrEqual(ARRAY_MAX_COUNT * 1);
  });

  it('count传参错误', () => {
    const res1 = mock({
      'arr|count=-1': [1, 2]
    });
    expect(res1.arr.length).toBeGreaterThanOrEqual(2 * ARRAY_MIN_COUNT);
    // 超过最大值范围
    const res2 = mock({
      'arr|count=1001': [1, 2]
    });
    expect(res2.arr.length).toBeLessThanOrEqual(ARRAY_MAX_COUNT * 2);
  });

  it('无效传参会被忽略', () => {
    const res4 = mock({
      'arr|aaa=1001': [1]
    });
    expect(res4.arr).toEqual([1]);
  })
});
