import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成日期', () => {
  it('生成默认格式的日期', () => {
    const ret = mock.random.date();
    expect(ret).toMatch(/\d\d\d\d-\d\d-\d\d/);
  });

  it('生成指定格式的日期', () => {
    const ret = mock.random.date('yyyy/MM/dd');
    expect(ret).toMatch(/\d\d\d\d\/\d\d\/\d\d/);
  });
});
