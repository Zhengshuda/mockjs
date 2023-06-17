import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('color函数测试', () => {
    it('默认生成hex格式颜色', () => {
        const result = Mock.color();
        expect(result).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    it('生成hsl格式颜色', () => {
        const result = Mock.color('hsl');
        expect(result).toMatch(/^hsl\(\d{1,3}, \d{1,3}%, \d{1,3}%\)$/);
    });

    it('生成rgb格式颜色', () => {
        const result = Mock.color('rgb');
        expect(result).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
    });

    it('生成rgba格式颜色', () => {
        const result = Mock.color('rgba');
        expect(result).toMatch(/^rgba\(\d{1,3}, \d{1,3}, \d{1,3}, \d\.\d\)$/);
    });
});
