import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('解析模板字符串', () => {
  it('解析基础随机函数', () => {
    const ret = mock.template('@int(1,2)');
    expect(ret).lessThanOrEqual(2);
    expect(ret).greaterThanOrEqual(1);
  });

  it('解析自定义扩展函数', () => {
    mock.extend('randomA', (param) => {
        return 'a' + param;
    });
    const ret = mock.template('@randomA(1)');
    console.log('================', ret);
    
    expect(ret).equals('a1');
  });

  it('未命中任何解析规则时', () => {
    const ret = mock.template('$^$^gqgokm');
    // 放回原始值
    expect(ret).equals('$^$^gqgokm');
  });
});
