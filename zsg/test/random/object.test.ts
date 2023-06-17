import { object } from '../../src';
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

        const result = object(generator, minLength, maxLength);

        // 验证生成对象的长度是否在[minLength, maxLength]范围内
        expect(Object.keys(result).length).toBeGreaterThanOrEqual(minLength);
        expect(Object.keys(result).length).toBeLessThanOrEqual(maxLength);
    });

    // 测试生成对象的嵌套深度是否符合预期
    it('生成对象的嵌套深度', () => {
        const generator = {
            level1: {
                level2: {
                    level3: 'string'
                }
            }
        };

        const result = object(generator);

        // 验证生成对象的嵌套深度是否符合预期
        expect(typeof result.level1).toBe('object');
        expect(typeof (result.level1 as any).level2).toBe('object');
        expect(typeof ((result.level1 as any).level2 as any).level3).toBe('string');
    });
});
