import { it, describe, expectTypeOf, expect } from 'vitest';
import FMock from '../src/index';

FMock.setEnv('NODE_ENV', 'development');
const Mock = FMock.mock;

describe('测试时间', () => { 
  it(' time func type', () => {
    expectTypeOf(Mock('@time')).toBeString();
  });

  it('默认格式 HH:mm:ss', () => {
    const res1 = Mock('@time');
    expect(res1).toMatch(/^\d{2}:\d{2}:\d{2}$/);
  });

  it('format指定格式', () => {
    const res1 = Mock('@time|format=mm-ss');
    expect(res1).toMatch(/^\d{2}-\d{2}$/);

    const res2 = Mock('@time|format=[AABB]');
    expect(res2).toMatch(/^AABB$/);
  });

  it('不能识别的格式会原样返回', () => {
    const res1 = Mock('@time|format=1234'); 
    expect(res1).toMatch(/^1234$/);
  });
})
