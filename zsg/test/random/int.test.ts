import { int } from '../../src';
import { describe, it, expect } from 'vitest'

describe('int函数测试', () => {
    it('生成的整数应该在[min, max]范围内', () => {
        const min = 1;
        const max = 10;
        const result = int(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    it('不传入参数时，生成的整数应该在[Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]范围内', () => {
        const result = int();
        expect(result).toBeGreaterThanOrEqual(Number.MIN_SAFE_INTEGER);
        expect(result).toBeLessThanOrEqual(Number.MAX_SAFE_INTEGER);
    });
});
