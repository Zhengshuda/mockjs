import Mock from '../../src';
import { describe, expect, it } from 'vitest';

// 测试生成对象是否符合预期
describe('object 函数测试', () => {
    it('生成对象的长度', () => {
        const generator = {
            key1: 'string',
            key2: 1,
            key3: true,
            key4: 'string',
            key5: 1
        };

        const minLength = 3;
        const maxLength = 5;

        const result = Mock.object(generator, minLength, maxLength);

        // 验证生成对象的长度是否在[minLength, maxLength]范围内
        expect(Object.keys(result).length).toBeGreaterThanOrEqual(minLength);
        expect(Object.keys(result).length).toBeLessThanOrEqual(maxLength);
    });

    // 测试生成对象的嵌套深度是否符合预期
    it('生成对象的嵌套深度', () => {
        const generator = {
            level1: {
                level2: {
                    level3: true
                }
            }
        };

        const result = Mock.object(generator);

        // 验证生成对象的嵌套深度是否符合预期
        expect(typeof result.level1).toBe('object');
        expect(typeof (result.level1 as any).level2).toBe('object');
        expect(typeof ((result.level1 as any).level2 as any).level3).toBe('boolean');
    });
    it('空对象测试', () => {
        expect(() => Mock.object({})).toThrowError();
    });
});
