import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成 bool', () => {
  it('生成bool值', () => {
    const ret = mock.random.bool();
    expect([true, false]).contains(ret);
  });
});
