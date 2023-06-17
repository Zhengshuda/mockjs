import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('自定义扩展', () => {
  it('扩展方法至 random 对象上', () => {
    expect(mock.random).not.haveOwnProperty('one');

    mock.extend('one', () => 1);
    expect(mock.random).haveOwnProperty('one');
  });

  it('使用自定义扩展方法', () => {
    mock.extend('phone', (prefix: string) => {
        const { int } = mock.random;
        return prefix + '1' + int(3, 9) + int(0, 9) + int(10000000, 99999999).toString();
    });

    const ret = mock.random.phone('+86');
    expect(ret).match(/^\+861[3-9]\d{9}$/);
  });

  it('模板解析', () => {
    mock.extend('phone', (prefix = '') => {
        const { int } = mock.random;
        return prefix + '1' + int(3, 9) + int(0, 9) + int(10000000, 99999999).toString();
    });

    const ret = mock.json2mock({
        name: 'jock',
        phone: '@phone()',
    });
    
    expect(ret).toEqual({
        name: 'jock',
        phone: expect.stringMatching(/^1[3-9]\d{9}$/),
    })
  });

  it('extend 相同 key，后者覆盖前者', () => {
    mock.extend('rkey', () => 1);
    mock.extend('rkey', () => 2);

    expect(mock.random.rkey()).equal(2);
  });
});
