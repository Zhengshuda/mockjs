import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('验证数字，长度为6', () => {
    const num = mock.getNum(6)
    const len = num.toString() 
    expect(num).toBeTypeOf('number');
    expect(len).toHaveLength(6);
});


