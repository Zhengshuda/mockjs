import { it, expect, describe } from 'vitest';
import FMock from '../src/index';
FMock.setEnv('NODE_ENV', 'development');

describe('define func type', () => {
  it('FMock.define type', () => {
    expect(FMock.define).toBeTypeOf('function');
  });  
});

describe('test define param', () => {
  it('注册一个方法', () => {
    function f1 () { return '111' }
    FMock.define({
      testDefine: f1
    });
    expect(FMock.mock('@testDefine')).toBe(f1());
  });

  it('注册多个方法', () => {
    function f1 () { return '111' }
    function f2 () { return '222' }
    FMock.define({
      f1: f1,
      f2: f2
    });
    expect(FMock.mock('@f1')).toBe(f1());
    expect(FMock.mock('@f2')).toBe(f2());
  });
});

describe('test wrong params', () => { 
  it('test wrong params type', () => {
    const p1 = [1, 2, 3];
    expect(() => FMock.define(p1)).toThrowError('Wrong option!');
    const p2 = '123';
    expect(() => FMock.define(p2)).toThrowError('Wrong option!');
  });

  it('define 一个已注册的函数', () => {
    expect(() => FMock.define({
      string: function() {
        return 'testDefine';
      }
    })).toThrowError('already been defined!');
  });

  it('测试传入对象值类型错误', () => {
    expect(() => FMock.define({
      testDefine1: 'aaa'
    })).toThrowError('is not a funciton!');
  });
 })

