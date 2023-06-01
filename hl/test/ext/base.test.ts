import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('使用基础扩展', () => {
  it('随机生成手机号', () => {
    const randomPhone = mock.custom.use('phone');
    const ret = randomPhone();

    expect(ret).match(/^1[3-9]\d{9}$/);
  });

  it('随机生成身份证', () => {
    const randomIdCard = mock.custom.use('idCard');
    const ret = randomIdCard();

    expect(ret).match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);
  });
});
