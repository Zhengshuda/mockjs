import { describe, expect, it } from 'vitest';
import { idCard } from '../../src';

describe('idCard函数测试', () => {
    it('idCard函数生成的身份证号码格式正确', () => {
        const id = idCard();
        const regExp = /^[1-9]\d{9}(0[1-9]|1[0-2])(0[1-9]|[1-2]\d|3[0-1])\d{3}[0-9X]$/;
        expect(regExp.test(id)).toBe(true);
    });
});
