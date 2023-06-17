import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('numTest', () => {
    const num = mock.getNum(6)
    const len = num.toString() 
    expect(num).toBeTypeOf('number');
    expect(len).toHaveLength(6);
});


