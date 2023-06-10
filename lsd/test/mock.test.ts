import { it, expect, describe } from 'vitest';
import FMock from '../src/index';

describe('function type', () => { 
  it('mock type', () => {
    expect(FMock.mock).toBeTypeOf('function');
  });
 });

describe('mock 复杂数据类型', () => {

  it('null | undefined', () => {
    expect(FMock.mock(null)).toBe('null');
    expect(FMock.mock(undefined)).toBe('undefined');
  });

  // 复杂对象见 mock-template.test.ts
  it('简单object', () => {
    expect(FMock.mock({
      a: '111'
    })).toBeTypeOf('object');
  })

  it('简单function', () => {
    expect(FMock.mock(function() { return 'simple function'})).toEqual('simple function');
  })

  it('object 中 function带参数', () => {
    expect(FMock.mock({
      'func1|param1=hello&param2=world': function({param1, param2}) {
        return param1 + ' ' + param2;
      }
    })).toEqual({
      func1: expect.stringMatching('hello world'),
    });
  });

  it('object 中 function不带参数', () => {
    expect(FMock.mock({
      'func1': function() {
        return 'resutl';
      },
    })).toEqual({
      func1: expect.stringMatching('resutl'),
    });
  });
});
