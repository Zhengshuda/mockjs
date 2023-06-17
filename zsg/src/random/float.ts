import int from './int';
import string from './string';
import char from './char';

/**
 * @description 随机生成浮点数
 * @param min 最小值
 * @param max 最大值
 * @param decimalMin 最短小数位
 * @param decimalMax 最长小数位
 * @returns 浮点数
 */
export default function float(min = 0, max = 1, decimalMin = 0, decimalMax = 17) {
    if (min > max) {
        throw Error('The parameter min must be less than the parameter max');
    }

    const dmin = Math.max(Math.min(decimalMin, 17), 0);
    const dmax = Math.max(Math.min(decimalMax, 17), 0);
    const numberCharset = '0123456789';

    const result = int(min, max - 1)
        + '.'
        + string(numberCharset, dmin, dmax - 1)
        + char(numberCharset.substring(1)); // 最后一个小数位不能为 0

    return parseFloat(result);
}
