import Random from '../random';
import { getType, _parseOptions } from '../utils/utils';
import _dealArray from './array';

const mock = (options: any): any => {
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

/**
 * 处理 String 传入
 * @param str 传入的字符串
 * @param opt 参数
 * @returns result
 */
const _dealString = (str: string, opt: object = {}) => {
  if(str.startsWith('@')) {
    const mark = str.substring(1);
    if(Random[mark]) {
      return Random[mark](opt);
    }
  }
  return str;
}

// todo 写 API
const _dealObject = (options: object) => {
  const res = {};
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

export default mock;
