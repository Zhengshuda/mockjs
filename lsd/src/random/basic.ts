import { DATE_DEFAULT_FOMAT, STRING_MAX_LEN, STRING_MIN_LEN, TIME_DEFAULT_FOMAT } from '../utils/const';
import _ from 'lodash';
import dayjs from 'dayjs';

interface integerOption {
  min?: string | number; // 最短长度
  max?: string | number; // 最大长度
}

/**
 * 返回一个随机整数值
 * @param min 最小值
 * @param max 最大值
 */
const integer = (opt: integerOption): number => {
  let { min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER } = opt;
  min = parseInt(String(min), 10);
  max = parseInt(String(max), 10);
  if(min < Number.MIN_SAFE_INTEGER) min = Number.MIN_SAFE_INTEGER;
  if(max > Number.MAX_SAFE_INTEGER) max = Number.MAX_SAFE_INTEGER;
  if(min > max) {
    min = Number.MIN_SAFE_INTEGER;
    max = Number.MAX_SAFE_INTEGER;
  }
  return Math.round(Math.random() * (max - min) + min);
};

/**
 * 返回一个随机字符
 */
const char = () => {
  // 字符串集
  const allChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLen = allChar.length - 1;
  return allChar.charAt(integer({ min: 0, max: charsLen }));
};

interface stringOption {
  min?: number | string; // 最短长度
  max?: number | string; // 最大长度
  len?: number; // 固定长度（优先级高）
}

/**
 * 返回一个随机字符串
 * @param opt options
 * @returns string
 */
const string = (opt: stringOption): string => {
  const strLen = _getLength(opt);
  let res = '';
  for (let i = 0; i < strLen; i++) {
    res += char();
  }
  return res;
};

/**
 * 从配置 stringOption 中获取实际长度
 * @param opt 配置
 * @returns length
 */
const _getLength = (opt: stringOption): number => {
  let { min = STRING_MIN_LEN, max = STRING_MAX_LEN, len = '' } = opt;
  len = parseInt(len.toString(), 10);
  
  // 校验长度
  if ( typeof len !== 'undefined' && _.isInteger(len)) {
    if(len >= STRING_MIN_LEN && len <= STRING_MAX_LEN) {
      return len;
    } else {
      console.error('len值无效');
    }
  }

  min = parseInt('' + min, 10);
  max = parseInt('' + max, 10);
  if (!_.isInteger(max) || !max || max > STRING_MAX_LEN) max = STRING_MAX_LEN;
  if (!_.isInteger(min) || !min || min < STRING_MIN_LEN) min = STRING_MIN_LEN;
  if (max < min) {
    min = STRING_MIN_LEN;
    max = STRING_MAX_LEN;
    console.error('传入的参数非法：min 大于 max，使用默认值');
  }
  return integer({min, max});
}

/**
 * 返回随机的布尔值
 * @returns true | false
 */
const boolean = (): boolean => {
  return Math.random() >= 0.5;
};

/**
 * 生成随机Date
 * @returns date
 */
const randomDate = () => {
  const min = new Date(0);
  const max = new Date();
  return new Date(Math.random() * (max.getTime() - min.getTime()));
};

interface formatOpt {
  format?: string
}
/**
 * 生成随机日期
 * @param formatStr 日期格式，参考dayjs官网，默认格式 YYYY-MM-DD
 * @returns 日期
 */
const date = (opt: formatOpt) => {
  const { format = DATE_DEFAULT_FOMAT } = opt;
  const curDate = randomDate();
  return dayjs(curDate).format(format);
};

/**
 * 生成随机时间
 * @param formatStr 时间格式，参考dayjs官网，默认格式 HH:mm:ss
 * @returns 时间
 */
const time = (opt: formatOpt) => {
  const { format = TIME_DEFAULT_FOMAT } = opt;
  const curDate = randomDate();
  return dayjs(curDate).format(format);
};

export {
  integer,
  string,
  boolean,
  date,
  time,
};
