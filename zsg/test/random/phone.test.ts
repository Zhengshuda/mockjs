import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('phone 函数测试', () => {
    it('生成的手机号应该以 1 开头', () => {
        const result = Mock.phone();
        expect(result.startsWith('1'), '手机号不以 1 开头');
    });

    it('生成的手机号第二位应该是 3-9 中的一个数字', () => {
        const result = Mock.phone();
        const secondDigit = result.charAt(1);
        expect(secondDigit >= '3' && secondDigit <= '9', '手机号第二位不是 3-9 中的一个数字');
    });

    it('生成的手机号后 8 位应该是 10000000-99999999 中的一个随机数字', () => {
        const result = Mock.phone();
        const lastEightDigits = Number(result.slice(2));
        expect(lastEightDigits >= 10000000 && lastEightDigits <= 99999999);
    });
});