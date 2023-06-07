import { it, expect } from 'vitest';
import FMock from '../src/index';

// function type
it('FMock.define type', () => {
  expect(FMock.define).toBeTypeOf('function');
});

// test params
it('FMock.define test', () => {
  FMock.define({
    testDefine: function() {
      return 'testDefine';
    }
  });
  expect(FMock.mock('@testDefine')).toBe('testDefine');
});

// test wrong params
it('FMock.define test wrong params', () => {

  expect(() => FMock.define([1, 2, 3])).toThrowError('Wrong option!');
  
  expect(() => FMock.define({
    string: function() {
      return 'testDefine';
    }
  })).toThrowError('already been defined!');

  expect(() => FMock.define({
    testDefine1: 'aaa'
  })).toThrowError('is not a funciton!');
});
