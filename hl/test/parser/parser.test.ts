import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('解析字符，生成随机函数', () => {
  it('解析字符', () => {
    const ret = mock.parser('@int(0,10)');
    expect(ret).lessThanOrEqual(10);
    expect(0).lessThanOrEqual(ret);

    const ret1 = mock.parser('@phone()');
    expect(ret1).match(/^1[3-9]\d{9}$/);
  });
});
