import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('随机生成数组', () => {
  it('生成指定长度的数组', () => {
    // 生成长度为 1 的数组
    const ret1 = mock.random.array(1, () => mock.random.int());
    expect(ret1).toHaveLength(1);
    // 生成长度为 4 的数组
    const ret2 = mock.random.array(100000, () => mock.random.int());
    expect(ret2).toHaveLength(100000);
  });

  it('数组参数长度小于 0 使，抛出异常', () => {
    expect(() => mock.random.array(-1, [])).toThrowError('array of lengths cannot be smaller than 0');
  });

  it('生成指定内容的数组', () => {
    // 生成的数据一点为 a/b/c 中的其中一个
    const list = ['a', 'b', 'c'];
    const ret1 = mock.random.array(1, list);
    expect(list).contains(ret1[0]);

    // 生成随机整数 0、1
    const ret2 = mock.random.array(1, () => mock.random.int(0, 1));
    expect([0, 1]).contains(ret2[0]);
  });

});
