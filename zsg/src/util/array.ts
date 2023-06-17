/**
 * 生成一个指定长度的不重复随机数字数组
 * @param maxValue 最大值
 * @param length 长度
 * @returns 数字数组
 */
export function generateRandomArray(maxValue: number, length: number): number[] {
    if (maxValue <= 0 || length <= 0 || length > maxValue) {
        throw new Error('Invalid input');
    }

    const result: number[] = [];

    while (result.length < length) {
        const randomNumber = Math.floor(Math.random() * maxValue);
        if (!result.includes(randomNumber)) {
            result.push(randomNumber);
        }
    }

    return result;
}
