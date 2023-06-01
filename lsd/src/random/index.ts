import _ from 'lodash';
import {
  integer,
  string,
  boolean,
  date,
  time,
} from './basic';
import email from './email';
import phone from './phone';

interface Random {
  integer: Function,
  string: Function,
  boolean: Function,
  date: Function,
  time: Function,
  define: Function,
  email: Function,
  phone: Function,
}

/**
 * 注册自定义函数
 * @param option 键值对形式，值必须为函数
 * @returns void
 */
const defineFunc = (option: object): void => {
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

const Random: Random = {
  integer,
  string,
  boolean,
  date,
  time,
  // todo 补充 api 文档
  email,
  phone,
  define: defineFunc,
};

export default Random;
