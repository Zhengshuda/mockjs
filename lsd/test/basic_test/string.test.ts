import { it, expect, describe } from 'vitest';
import FMock from '../../src/index';
import { STRING_MAX_LEN, STRING_MIN_LEN } from '../../src/utils/string_const';

const Mock = FMock.mock;

// function type
it('string type', () => {
  expect(Mock('@string')).toBeTypeOf('string');
});

// test params
it('string params', () => {
  expect(FMock.mock('plainString')).toEqual('plainString');

  const str1 = Mock('@string');
  expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
  expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);

  const str2 = Mock('@string|min=5');
  expect(str2.length).toBeGreaterThanOrEqual(5);

  const str3 = Mock('@string|min=10&max=40');
  expect(str3.length).toBeGreaterThanOrEqual(10);
  expect(str3.length).toBeLessThanOrEqual(40);

  const res4 = Mock('@string|min=10&max=40&len=33');
  expect(res4.length).toBe(33);
});

// test wrong params
describe('call string with wrong params', () => {
  it('传入未定义参数不生效', () => {
    const str1 = Mock('@string|abc=asdfa&edf=esifen');
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

  it('传入max值大于最大值', () => {
    const max = STRING_MAX_LEN + 1;
    const str1 = Mock(`@string|max=` + max);
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
  });

  it('传入min小于最小值', () => {
    const min = STRING_MIN_LEN - 1;
    const str1 = Mock(`@string|min=` + min);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

  it('max小于min', () => {
    const str1 = Mock('@string|min=50&max=40');
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

  it('传入len值大于最大值', () => {
    const len = STRING_MAX_LEN + 1;
    const str1 = Mock(`@string|len=` + len);
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

  it('传入len小于最小值', () => {
    const len = STRING_MIN_LEN - 1;
    const str1 = Mock(`@string|len=` + len);
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });
  
  it('传入len值不合法', () => {
    const str1 = Mock(`@string|len=xxx`);
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

  it('传入max不合法', () => {
    const str1 = Mock('@string|max=esifen');
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

  it('传入min不合法', () => {
    const str1 = Mock('@string|min=esifen');
    expect(str1.length).toBeLessThanOrEqual(STRING_MAX_LEN);
    expect(str1.length).toBeGreaterThanOrEqual(STRING_MIN_LEN);
  });

});
