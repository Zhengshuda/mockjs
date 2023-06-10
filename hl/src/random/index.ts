import array from './array';
import bool from './bool';
import datetime from './datetime';
import float from './float';
import int from './int';
import string from './string';
import timestamp from './timestamp';

const random = {
  array,
  bool,
  datetime,
  float,
  int,
  string,
  timestamp,
};

export default random as (typeof random & Record<string, (...arg: any) => any>);