import { STRING_MAX_LEN, STRING_MIN_LEN } from "../utils/string_const";
import _ from "lodash";
import integer from "./integer";

interface stringOption {
  min?: number | string; // 最短长度
  max?: number | string; // 最大长度
  len?: number | string; // 固定长度（优先级高）
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
 * 返回一个随机字符
 */
const char = () => {
  // 字符串集
  const allChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsLen = allChar.length - 1;
  return allChar.charAt(integer({ min: 0, max: charsLen }));
};

/**
 * 从配置 stringOption 中获取实际长度
 * @param opt 配置
 * @returns length
 */
const _getLength = (opt: stringOption): number => {
  let { min = STRING_MIN_LEN, max = STRING_MAX_LEN, len } = opt;
  min = parseInt('' + min, 10);
  max = parseInt('' + max, 10);
  len = parseInt('' + len, 10);
  // 校验长度
  if ( typeof len !== 'undefined'
    && _.isInteger(len)
    && len >= STRING_MIN_LEN
    && len <= STRING_MAX_LEN
  ) {
    return len;
  }

  if (!_.isInteger(max) || !max || max > STRING_MAX_LEN) max = STRING_MAX_LEN;
  if (!_.isInteger(min) || !min || min < STRING_MIN_LEN) min = STRING_MIN_LEN;
  if(min > max) {
    console.error('传参无效');
    return integer({ min: STRING_MIN_LEN, max: STRING_MAX_LEN});
  }
  return integer({min, max});
}

export default string;