import int from './int';

/**
 * 随机生成字符串
 * @param min 最小长度
 * @param max 最大长度
 * @param pool 字符集
 * @returns 生成的字符串
 */
export default function string(min = 0, max = 10, pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  const len = int(Math.max(min, 0), max);
  let str = '';
  for (let i = 0; i < len; i++) {
    str += pool.charAt(int(0, pool.length - 1));
  }
  return str;
}
