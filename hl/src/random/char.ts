import int from './int';

/**
 * 生成一个随机字符
 * @param pool 随机字符集
 * @returns 随机字符
 */
export default function char(pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
  return pool.charAt(int(0, pool.length - 1));
}
