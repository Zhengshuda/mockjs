import { it, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

// function type
it('Random.define type', () => {
  expect(Random.define).toBeTypeOf('function');
});

// test params
it('Random.define test', () => {
  Random.define({
    testDefine: function() {
      return 'testDefine';
    }
  });
  expect(Random.testDefine()).toBe('testDefine');
});

// test wrong params
it('Random.define test', () => {

  expect(() => Random.define([1, 2, 3])).toThrowError('Wrong option!');
  
  expect(() => Random.define({
    string: function() {
      return 'testDefine';
    }
  })).toThrowError('already been defined!');

  expect(() => Random.define({
    testDefine1: 'aaa'
  })).toThrowError('is not a funciton!');
});
