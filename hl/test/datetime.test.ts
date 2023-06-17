import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('随机生成日期与时间', () => {
  it('生成默认格式的日期与时间', () => {
    const ret = mock.random.datetime();
    expect(ret).toMatch(/\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/);
  });

  it('生成指定格式的日期与时间', () => {
    const ret = mock.random.datetime('YYYY/MM/DD HH-mm-ss');
    expect(ret).toMatch(/\d\d\d\d\/\d\d\/\d\d \d\d-\d\d-\d\d/);
  });

  it('生成指定格式的时间', () => {
    const ret = mock.random.datetime('HH:mm:ss');
    expect(ret).toMatch(/\d\d:\d\d:\d\d/);
  });

  it('生成指定格式的日期', () => {
    const ret = mock.random.datetime('YYYY-MM-DD');
    expect(ret).toMatch(/\d\d\d\d-\d\d-\d\d/);
  });
});
