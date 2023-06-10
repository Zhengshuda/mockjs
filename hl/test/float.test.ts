import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('随机生成浮点型数值', () => {
  it('随机生成浮点型数值', () => {
    const ret = mock.random.float();
      
    expect(ret).to.be.a('number');
    expect(ret % 1).to.not.equal(0);
  });

  it('范围限制测试', () => {
    const ret = mock.random.float(-1, 10, 2, 10);
    expect(ret).greaterThanOrEqual(-1);
    expect(ret).lessThanOrEqual(10);

    const dLen = ret.toString().split('.')[1].length;
    expect(dLen).greaterThanOrEqual(2);
    expect(dLen).lessThanOrEqual(10);
  });

  it('异常处理', () => {
      expect(() => mock.random.float(2, 1)).toThrowError('min cannot be greater than the max');
      expect(() => mock.random.float(0, 1, 1, -1)).toThrowError('dmin cannot be greater than the dmax');
  });
});
