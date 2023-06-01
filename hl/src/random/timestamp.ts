/**
 * 生成随机时间戳
 * @returns 生成的时间戳
 */
export default function timestamp() {
  const min = new Date(0);
  const max = new Date();
  return new Date(Math.random() * (max.getTime() - min.getTime())).getTime();
}
