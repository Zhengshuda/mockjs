import custom from './custom';
import random from './random';
import ext from './ext';
import parser from './parser';
import json2Mock from './json2mock';

ext.setup();

export default {
  custom,
  random,
  parser,
  json2Mock,
  version: '0.1',
};
