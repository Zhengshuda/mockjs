import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('array函数测试', () => {
    it('生成长度为1的数组', () => {
        const result = Mock.array([1, 2, 3], 1, 1);
        expect(result.length).toBe(1);
    });

    it('生成长度为10的数组', () => {
        const result = Mock.array([1, 2, 3], 10, 10);
        expect(result.length).toBe(10);
    });

    it('生成长度在1到10之间的数组', () => {
        const result = Mock.array([1, 2, 3]);
        expect(result.length).toBeGreaterThanOrEqual(1);
        expect(result.length).toBeLessThanOrEqual(10);
    });

    it('生成的数组元素在给定的数组中', () => {
        const generator = [1, 2, 3];
        const result = Mock.array(generator);
        result.forEach((item) => {
            expect(generator).toContain(item);
        });
    });
});
