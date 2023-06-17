import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('string 函数测试', () => {
    it('生成长度为 0 的字符串', () => {
        const result = Mock.string(undefined, 0, 0);
        expect(result.length).toBe(0);
    });

    it('生成长度为 10 的字符串', () => {
        const result = Mock.string(undefined, 10, 10);
        expect(result.length).toBe(10);
    });

    it('生成长度在 0 到 10 之间的字符串', () => {
        const result = Mock.string(undefined, 0, 10);
        expect(result.length >= 0 && result.length <= 10);
    });

    it('生成指定字符集的字符串', () => {
        const result = Mock.string('abc', 5, 5);
        expect(/^[abc]{5}$/.test(result)).toBe(true);
    });
});
