import random from './random';
import template from './parser/tempalte';
import json2mock from './parser/json2mock';
import { defineConfig, getConfig } from './config';
import { logger } from './helper/logger';

function extend(key: string, func: (...arg: any) => any) {
  if (key in random) {
    logger('extend', `${key} is defined repeatedly`, 'warn');
  }
  random[key] = func;
};

export default {
  random,
  template,
  json2mock,
  extend,
  defineConfig,
  getConfig,
  version: '0.1',
};
