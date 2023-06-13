import { float } from '../../src';
import { describe, expect, it } from 'vitest';

describe('float 函数', () => {
    it('返回的浮点数应在指定范围内，并且小数位数在指定范围内', () => {
        const result = float(1, 3, 2, 4);
        expect(result >= 1 && result <= 3);

        const decimalLength = result.toString().split('.')[1].length;
        expect(decimalLength >= 2 && decimalLength <= 4);
    });

    it('返回的浮点数应在默认范围内 [0, 1]，并且小数位数在默认范围内 [0, 17]', () => {
        const result = float();
        expect(result >= 0 && result <= 1);

        const decimalLength = result.toString().split('.')[1].length;
        expect(decimalLength >= 0 && decimalLength <= 17);
    });
});