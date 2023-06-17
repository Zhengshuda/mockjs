import int from './int';

/**
 * @description 随机生成数组
 * @param generator 数组项生成函数
 * @param minLen 数组最小长度
 * @param maxLen 数组最大长度
 * @returns 数组
 */
export default function array(generator: Array<any>, minLen = 1, maxLen = 10) {
    const randomLen = int(minLen, maxLen);
    let result = [];

    for (let i = 0; i < randomLen; i++) {
        result.push(generator[int(0, generator.length - 1)]);
    }

    return result;
}
