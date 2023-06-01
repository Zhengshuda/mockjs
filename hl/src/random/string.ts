import char from './char';
import int from './int';

/**
 * 随机生成字符串
 * @param minLen 最小长度
 * @param maxLen 最大长度
 * @param pool 字符集
 * @returns 生成的字符串
 */
export default function string(minLen = 0, maxLen = 10, pool?: string) {
  const len = int(Math.max(minLen, 0), maxLen);
  let str = '';
  for (let i = 0; i < len; i++) {
    str += char(pool);
  }
  return str;
}
