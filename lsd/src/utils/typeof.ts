/**
 * 获取参数的确切类型
 * @param obj 参数
 * @returns 参数的类型（array| function | error | boolean | number | string | date | regexp）
 */
export function getType(obj: any): string {
  if (obj === null || obj === undefined) {
    return String(obj);
  }
  let res = Object.prototype.toString.call(obj).match(/\[object (\w+)\]/);
  return (res as RegExpMatchArray)[1]?.toLowerCase();
}