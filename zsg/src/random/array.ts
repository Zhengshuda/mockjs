import int from './int';

/**
 * @description 随机生成数组
 * @param func 数组项生成函数
 * @param length 数组长度
 * @returns 数组
 */
export default function array(func: Function | Array<any>, length = 1) {
    let result = [];

    for (let i = 0; i < length; i++) {
        if (Array.isArray(func)) {
            result.push(func[int(0, func.length - 1)]);
        } else {
            result.push(func());
        }
    }

    return result;
}
