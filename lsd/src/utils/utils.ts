export function getType(obj: any) {
  // Array
  // Function（它的 typeof 返回 "function"）
  // Error
  // Boolean
  // Number
  // String
  // Date
  // RegExp
  if(obj === null || obj === undefined) {
    return String(obj);
  }
  let res = Object.prototype.toString.call(obj).match(/\[object (\w+)\]/);
  return (res as RegExpMatchArray)[1]?.toLowerCase();
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

interface parseRuleInterface {
  [key: string]: string,
};
/**
 * 将rule 字符串解析成参数对象
 * @param str rule 字符串（url 传参形式 a=xxx&b=xxx）
 * @returns 参数
 */
export const _parseRule = (str: string = ''): parseRuleInterface => {
  const res: parseRuleInterface = {};
  const arr = str.split('&');
  arr.forEach(item => {
    const paramArr = item.split('=');
    const key = paramArr[0];
    res[key] = paramArr[1];
  })
  return res;
}