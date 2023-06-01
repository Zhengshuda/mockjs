import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('自定义扩展随机函数', () => {
  it('自定义 ip 地址', () => {
    mock.custom.extend('ip', () => {
      const { int } = mock.random;
      return int(1, 255) + '.' + int(0, 255) + '.' + int(0, 255) + '.' + int(0, 255);
    });

    // 扩展中存在 ip 随机函数
    expect(mock.custom.context).haveOwnProperty('ip');
    // 使用 ip 扩展
    const ipRandom = mock.custom.use('ip');
    const ret = ipRandom();
    expect(ret).match(
      /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    );
  });
});
