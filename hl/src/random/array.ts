import int from './int';

/**
 * 生成随机数组
 * @param generator 传入数组时在此数组中随机生成，传入函数时，则使用函数的返回值。
 * @param length 生成的数组长度
 * @returns 随机的数组
 */
export default function array(generator: Array<any> | (() => any), length = 1) {
  let res = [];

  for (let i = 0; i < length; i++) {
    if (Array.isArray(generator)) {
      res.push(generator[int(0, generator.length - 1)]);
    } else {
      res.push(generator());
    }
  }
  return res;
}
