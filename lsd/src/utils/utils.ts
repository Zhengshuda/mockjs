export function getType(obj) {
  // Array
  // Function（它的 typeof 返回 "function"）
  // Error
  // Boolean
  // Number
  // String
  // Date
  // RegExp
  return (obj === null || obj === undefined) ? String(obj) : Object.prototype.toString.call(obj).match(/\[object (\w+)\]/)[1].toLowerCase();
}

/**
 * 解析对象 的 key 和 value，转化为参数对象
 * @param key 
 * @param value 
 * @returns 
 */
export const _parseOptions = (key: string, value: any) => {
  const params = key.split('|');
  const name = params[0];
  const rule = _parseRule(params[1]);
  return {
    ...rule,
    name,
    raw: value
  }
}

/**
 * 将rule 字符串解析成参数对象
 * @param str rule 字符串（url 传参形式 a=xxx&b=xxx）
 * @returns 参数
 */
export const _parseRule = (str: string = ''): object => {
  const res = {};
  const arr = str.split('&');
  arr.forEach(item => {
    const paramArr = item.split('=');
    res[paramArr[0]] = paramArr[1];
  })
  return res;
}