import char from './char';
import int from './int';

/**
 * @description 随机生成字符串
 * @param minLen 最小长度
 * @param maxLen 最大长度
 * @param charset 字符集
 * @returns 字符串
 */
export default function string(charset?: string, minLen = 0, maxLen = 10) {
    const len = int(Math.max(minLen, 0), maxLen);
    let result = '';

    for (let i = 0; i < len; i++) {
        result += char(charset);
    }

    return result;
}
