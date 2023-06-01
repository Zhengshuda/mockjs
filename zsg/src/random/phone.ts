import int from './int';

/**
 * @description 随机生成手机号
 * @returns 手机号
 */

export default function phone() {
    return '1' + int(3, 9) + int(0, 9) + int(10000000, 99999999).toString();
}