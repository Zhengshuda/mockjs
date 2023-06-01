import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成字符串', () => {
  it('生成指定字符串', () => {
    const ret = mock.random.string();
    expect(ret).to.be.a('string');
  });
});
