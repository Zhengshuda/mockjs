import int from './int';
import string from './string';

/**
 * 生成随机浮点型数值
 * @param min 最小值
 * @param max 最大值
 * @param dmin 小数位最小长度
 * @param dmax 小数位大长度
 * @returns
 */
export default function float(min?: number, max?: number, dmin = 0, dmax = 15) {
  // 小数末位不能为 0
  let ret = int(min, max) + '.' + string(dmin, dmax - 1, '0123456789') + int(1, 9);

  return parseFloat(ret);
}
