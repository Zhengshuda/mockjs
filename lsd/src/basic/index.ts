import integer from './integer';
import string from './string';
import { date, time } from './date';
import boolean from './boolean';
import phone from './phone';
import array from './array';
import define from './define';

interface BasicInterface {
  [key: string]: Function,
};

const Basic: BasicInterface = {
  integer,
  string,
  boolean,
  date,
  time,
  phone,
  array,
  define,
};

export const registerAttr = (key: string, func: Function) => {
  Basic[key] = func;
}

export default Basic;
