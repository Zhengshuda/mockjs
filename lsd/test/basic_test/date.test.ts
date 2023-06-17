import { it, describe, expectTypeOf, expect } from 'vitest';
import FMock from '../../src/index';
const Mock = FMock.mock;

describe('测试日期', () => { 
  it('date func type', () => {
    expectTypeOf(Mock('@date')).toBeString();
  });

  it('默认格式 YYYY-MM-DD', () => {
    const res1 = Mock('@date');
    expect(res1).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('format指定格式', () => {
    const res1 = Mock('@date|format=MM-DD');
    expect(res1).toMatch(/^[01]\d-[0123]\d$/);

    const res2 = Mock('@date|format=[AABB]');
    expect(res2).toMatch(/^AABB$/);
  });

  it('不能识别的格式会原样返回', () => {
    const res1 = Mock('@date|format=1234'); 
    expect(res1).toMatch(/^1234$/);
  });
 })
