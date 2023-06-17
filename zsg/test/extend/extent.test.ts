import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('extend 函数测试', () => {
    it('扩展自定义函数', () => {
        const customGenerator = () => Mock.string('a', 6, 6);
        Mock.extend('customA', customGenerator);
        const result = Mock.custom.customA();
        expect(result.length).toBe(6);
    });
});