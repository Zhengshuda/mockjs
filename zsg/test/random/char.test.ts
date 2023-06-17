import { char } from '../../src';
import { describe, expect, it } from 'vitest';

describe('char函数测试', () => {
    it('默认字符集', () => {
        const result = char();
        expect(typeof result).toBe('string');
        expect(result.length).toBe(1);
        expect(/[a-zA-Z0-9]/.test(result)).toBe(true);
    });

    it('自定义字符集', () => {
        const result = char('abc');
        expect(typeof result).toBe('string');
        expect(result.length).toBe(1);
        expect(/[abc]/.test(result)).toBe(true);
    });
});
