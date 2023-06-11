import { it, expect } from 'vitest';
import { getNum } from '../../src/number/index'

it('numTest1', () => {
    const num = getNum('@integer()')
    expect(num).toBeTypeOf('number');
});

it('numTest2', () => {
    const num = getNum('@integer(1, 9)')
    expect(num).toBeTypeOf('number');
});

it('numTest3', () => {
    const num = getNum('@integer(9)')
    expect(num).toBeTypeOf('number');
});

