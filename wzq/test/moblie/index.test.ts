import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('phoneTest', () => {
    const phone = mock.getPhone()
    expect(phone).toMatch(/^1[3456789]\d{9}$/);
});


