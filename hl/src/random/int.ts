/**
 * 随机生成整数
 * @param min 最小值
 * @param max 最大值
 * @returns 随机生成的值
 */
export default function int(min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.round(Math.random() * (max - min)) + min;
}
