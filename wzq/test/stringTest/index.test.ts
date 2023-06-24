import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('大写字母, 长度为4', () => {
    const str = mock.getStr(4, 'A-Z');
    expect(str).toBeTypeOf('string');
    expect(str).toHaveLength(4);
    expect(str).toMatch(/[A-Z][A-Z][A-Z][A-Z]/);
});

it('小写写字母, 长度为4', () => {
    const str = mock.getStr(4, 'a-z');
    expect(str).toBeTypeOf('string');
    expect(str).toHaveLength(4);
    expect(str).toMatch(/[a-z][a-z][a-z][a-z]/);
});

it('数字, 长度为4', () => {
    const str = mock.getStr(4, '0-9');
    expect(str).toBeTypeOf('string');
    expect(str).toHaveLength(4);
    expect(str).toMatch(/[0-9][0-9][0-9][0-9]/);
});

