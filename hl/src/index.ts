import random from './random';
import template from './parser/tempalte';
import json2mock from './parser/json2mock';

function extend(key: string, func: (...arg: any) => any) {
  if (key in random) {
    console.warn(`[extend]: ${key} is defined repeatedly`);
  }
  random[key] = func;
};

export default {
  random,
  template,
  json2mock,
  extend,
  version: '0.1',
};
