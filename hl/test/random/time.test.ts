import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成时间', () => {
  it('生成默认格式的时间', () => {
    const ret = mock.random.time();
    expect(ret).toMatch(/\d\d:\d\d:\d\d/);
  });

  it('生成指定格式的时间', () => {
    const ret = mock.random.time('HH-mm-ss');
    expect(ret).toMatch(/\d\d-\d\d-\d\d/);
  });
});
