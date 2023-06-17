import { bool } from '../../src';
import { describe, expect, it } from 'vitest';

describe('bool函数测试', () => {
    it('bool函数返回值应该为布尔值', () => {
        expect(typeof bool()).toBe('boolean');
    });

    it('bool函数返回值应该为true或false', () => {
        const result = bool();
        expect(result === true || result === false).toBe(true);
    });
});
