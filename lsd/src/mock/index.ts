import Random from '../random';
import { getType, _parseOptions } from '../utils/utils';
import _dealArray from './array';
import _ from 'lodash';

export const mock = (options: any): any => {
  const type = getType(options);
  let res;
  switch (type) {
    case 'string':
      res = _dealString(options);
      break;
    case 'object':
      res = _dealObject(options);
      break;
    case 'array':
      res = _dealArray({raw: options});
      break;
    case 'function':
      res = options.call();
      break;
    case 'null':
    case 'undefined':
      res = type;
    break;
    default:
      res = options;
      break;
  }
  return res;
}

interface defineOption {
  [key: string]: Function
}
/**
* 注册自定义函数
* @param option 键值对形式，值必须为函数
* @returns void
*/
export const define = (option: defineOption): void => {
 if(!_.isPlainObject(option)) {
   throw new Error(`Wrong option!`);
 }
 Object.keys(option).forEach(key => {
   if(Random[key]) {
     throw new Error(`${key} has already been defined!`);
   }
   if(!_.isFunction(option[key])) {
     throw new Error(`Definition for ${key} is not a funciton!`);
   }
   Random[key] = option[key];
 })
}

/**
 * 处理 String 传入
 * @param str 传入的字符串
 * @param opt 参数
 * @returns result
 */
const _dealString = (str: string, opt: object = {}) => {
  if(str.startsWith('@')) {
    const opt = _parseOptions(str.substring(1), '');
    const { name } = opt;
    if(Random[name]) {
      return Random[name](opt);
    }
  }
  return str;
}

interface dealObjectOption {
  [key: string]: any
}
/**
 * 处理对象传入
 * @param options 选项
 * @returns result
 */
const _dealObject = (options: dealObjectOption) => {
  const res: {
    [name: string]: string
  } = {};
  Object.keys(options).forEach(key => {
    const val = options[key];
    const opt = _parseOptions(key, val);
    const { name } = opt;
    const type = getType(options[key]);
    let actualVal;
    switch (type) {
      case 'string':
        actualVal = _dealString(val, opt);
        break;
      case 'object':
        actualVal = _dealObject(val);
        break;
      case 'array':
        actualVal = _dealArray(opt);
        break;
      case 'function':
        actualVal = val.call(null, opt);
        break;
      default:
        // number boolean undefined null
        actualVal = opt.raw;
        break;
    }
    res[name] = actualVal;
  })
  return res;
}
