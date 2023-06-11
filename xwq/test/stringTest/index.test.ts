import { it, expect } from 'vitest';
import { getString } from '../../src/string/index'

it('stringTest1', () => {
    const str = getString('@string()')
    expect(str).toBeTypeOf('string')
});

it('stringTest2', () => {
    const str = getString('@string(1, 9)')
    expect(str).toBeTypeOf('string')
});

it('stringTest3', () => {
    const str = getString('@string(9)')
    expect(str).toBeTypeOf('string')
});

it('stringTest4', () => {
    const str = getString('@string("low", 1, 9)')
    expect(str).toBeTypeOf('string')
});

