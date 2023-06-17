import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('stringTest', () => {
    const str = mock.getStr(6, 'A-Z');
    expect(str).toBeTypeOf('string');
    expect(str).toHaveLength(6);
});

