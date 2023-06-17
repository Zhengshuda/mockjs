import _ from 'lodash';

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

export default integer;
