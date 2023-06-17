import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('随机生成整型', () => {
  it('随机生成整型', () => {
    const ret = mock.random.int(-10, 10);
    expect(ret).to.be.a('number');
    expect(ret).lessThanOrEqual(10);
    expect(ret).greaterThanOrEqual(ret);
  });

  it('异常参数校验', () => {
    expect(() => mock.random.int(2, 1)).toThrowError('min cannot be greater than the max');
  });
});
