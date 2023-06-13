import { generateRandomArray } from '../util';

type GeneratorType = {
    [key: string]: string | number | boolean | GeneratorType | undefined;
};

/**
 * @description 随机生成一个对象
 * @param { GeneratorType } generator 随机对象生成器
 * @param { number } minLen 最小长度
 * @param { number } maxLen 最大长度
 * @returns { GeneratorType } 随机对象
 */
export default function object(
    generator: GeneratorType,
    minLen = 1,
    maxLen = 10
): GeneratorType {
    const keys = Object.keys(generator);
    const maxLength = keys.length > maxLen ? maxLen : keys.length;
    const randomLength = Math.floor(Math.random() * (maxLength - minLen + 1)) + minLen;
    const randomIndexList = generateRandomArray(keys.length, randomLength);
    const result: GeneratorType = {};

    for (let i = 0; i < randomLength; i++) {
        const randomKey = keys[randomIndexList[i]];
        const randomValue = generator[randomKey];

        if (typeof randomValue === 'object' && randomValue !== null) {
            result[randomKey] = object(randomValue, minLen, maxLen);
        } else {
            switch (typeof randomValue) {
                case 'string':
                    result[randomKey] = Math.random().toString(36).substring(2, 15);
                    break;
                case 'number':
                    result[randomKey] = Math.floor(Math.random() * 100);
                    break;
                case 'boolean':
                    result[randomKey] = Math.random() < 0.5;
                    break;
                default:
                    result[randomKey] = undefined;
            }
        }
    }

    return result;
};
