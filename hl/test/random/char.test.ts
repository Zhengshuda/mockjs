import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成字符', () => {
  it('生成指定字符', () => {
    const ret = mock.random.char('abc');
    expect(ret).toHaveLength(1);
    expect(['a', 'b', 'c']).contains(ret);
  });
});
