import int from './int';

/**
 * @description 随机生成一个字符
 * @param charset 字符集
 * @returns 字符
 */
export default function char(charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') {
    return charset.charAt(int(0, charset.length - 1));
}
