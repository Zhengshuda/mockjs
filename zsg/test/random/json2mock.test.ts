import Mock from '../../src';
import { describe, expect, it } from 'vitest';

describe('json2mock 函数', () => {
    it('生成的 mock 数据 key 和 type 应该正确', () => {
        const obj1 = {
            'int1|[1, 10]': 1,
            'float1|[1, 10, 1, 5]': 1.1,
            'string1|[1, 10]': 'abc',
            'bool1': true,
            'array1|[1, 3]': [1, 2, 3, 4, 5],
            'object1|[1, 3]': {
                'a': 1,
                'b': 2,
                'c': 3,
                'd': 4,
                'e': 5,
            },
        }
        const result = Mock.json2mock(obj1);
        expect(typeof result.int1 === 'number').toBe(true);
        expect(typeof result.float1 === 'number').toBe(true);
        expect(typeof result.string1 === 'string').toBe(true);
        expect(typeof result.bool1 === 'boolean').toBe(true);
        expect(Array.isArray(result.array1)).toBe(true);
        expect(String(result.object1) === '[object Object]').toBe(true);
    });

    it('值为 undefined 时，返回 undefined', () => {
        const obj2 = {
            'undefined1': undefined,
        }

        const result = Mock.json2mock(obj2);
        expect(result.undefined1 === undefined);
    });

    it('值为 null 时，返回 null', () => {
        const obj3 = {
            'null1': null,
        }

        const result = Mock.json2mock(obj3);
        expect(result.undefined1 === null);
    });

    it('传入格式错误', () => {
        const obj4 = {
            'int1|{1, 3}': 5,
        };
        expect(() => Mock.json2mock(obj4)).toThrowError();
    });
});