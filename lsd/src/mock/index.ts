import Basic from '../basic';
import { _parseOptions } from '../utils/parse';
import { getType } from '../utils/typeof';
import _ from 'lodash';

const mock = (options: any): any => {
  const type = getType(options);
  if (rawDealMap[type]) {
    return rawDealMap[type](options);
  }
  return options;
};

interface typeDealMapInterface {
  [key: string]: any;
}

const rawDealMap: typeDealMapInterface = {
  string: _dealString,
  object: _dealObject,
  array: _dealRawArray,
  function: _dealRawFunc,
  null: _dealBlankType,
  undefined: _dealBlankType,
};

function _dealRawFunc(options: Function) {
  return options.call(null);
}

function _dealRawArray(options: Array<any>) {
  return Basic.array({ raw: options });
}

function _dealBlankType(options: null | undefined) {
  return getType(options);
}

/**
 * 处理 String 传入
 * @param str 传入的字符串
 * @param opt 参数
 * @returns result
 */
function _dealString(str: string, option?: object) {
  if (!option) option = {};
  if (str.startsWith('@')) {
    const opt = {
      ..._parseOptions(str.substring(1), ''),
      ...option,
    };
    const { name } = opt;
    if (Basic[name]) {
      return Basic[name](opt);
    }
  }
  return str;
}

interface dealObjectOption {
  [key: string]: any;
}
/**
 * 处理对象传入
 * @param options 选项
 * @returns result
 */
function _dealObject(options: dealObjectOption) {
  const res: {
    [name: string]: string;
  } = {};
  Object.keys(options).forEach(key => {
    const val = options[key];
    const opt = _parseOptions(key, val);
    const { name } = opt;
    const type = getType(options[key]);
    if (objectDealMap[type]) {
      res[name] = objectDealMap[type](key, val);
    } else {
      res[name] = val;
    }
  });
  return res;
}

const objectDealMap: typeDealMapInterface = {
  string: _dealObjectString,
  object: _dealObjectObject,
  array: _dealObjectArray,
  function: _dealObjectFunc,
};

function _dealObjectString(key: string, val: string) {
  const opt = _parseOptions(key, val);
  return _dealString(val, opt);
}

function _dealObjectObject(key: string, val: object) {
  return _dealObject(val);
}

function _dealObjectArray(key: string, val: Array<any>) {
  const opt = _parseOptions(key, val);
  return Basic.array(opt);
}

function _dealObjectFunc(key: string, val: Function) {
  const opt = _parseOptions(key, val);
  return val.call(null, opt);
}

const define = Basic.define;

export { mock, define };
