import { it, expect, describe } from 'vitest';
import FMock from '../../src/index';
const Mock = FMock.mock;

describe('integer func type', () => { 
  it('integer type', () => {
    expect(Mock('@integer')).toBeTypeOf('number');
  });
 })

describe('integer params', () => { 
  
  it('默认值范围', () => {
    const int1 = Mock('@integer');
    expect(int1).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    expect(int1).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
  });

  it('设置最小值', () => {
    const int2 = Mock('@integer|min=5');
    expect(int2).toBeGreaterThanOrEqual(5);
  })

  it('设置最大值', () => {
    const int2 = Mock('@integer|max=10');
    expect(int2).toBeLessThanOrEqual(10);
  })

  it('设置范围', () => {
    const int1 = Mock('@integer|min=10&max=13');
    expect(int1).toBeGreaterThanOrEqual(10);
    expect(int1).toBeLessThanOrEqual(13);

    const int2 = Mock('@integer|min=-100&max=100');
    expect(int2).toBeGreaterThanOrEqual(-100);
    expect(int2).toBeLessThanOrEqual(100);

    const int3 = Mock('@integer|min=-1000&max=+100');
    expect(int3).toBeGreaterThanOrEqual(-1000);
    expect(int3).toBeLessThanOrEqual(100);

    const int4 = Mock('@integer|min=100&max=100');
    expect(int4).toBe(100);
  })
})

describe('wrong params', () => {
  it('最小值错误，重置为默认值', () => {
    const min = Number.MIN_SAFE_INTEGER - 1;
    const int2 = Mock('@integer|min=' + min);
    expect(int2).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
  })
  it('最大值错误，重置为默认值', () => {
    const max = Number.MAX_SAFE_INTEGER + 1;
    const int2 = Mock('@integer|max=' + max);
    expect(int2).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
  })

  it('最小值大于最大值,取默认值', () => {
    const int1 = Mock('@integer|min=100&max=10');
    expect(int1).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    expect(int1).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
  })

  it('传入无效配置，不生效', () => {
    const int1 = Mock('@integer|6666=10');
    expect(int1).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    expect(int1).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
  })
 });
