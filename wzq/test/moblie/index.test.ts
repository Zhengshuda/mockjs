import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('验证电话号码', () => {
    let phone = mock.getPhone()
    expect(phone).toMatch(/^1[3456789]\d{9}$/);
});


