import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('dateTest', () => {
    const date = mock.getDate('yyyy-MM-dd');
    expect(date).toMatch(/[1-3]\d\d\d-\d\d-\d\d/);
});

it('timeTest', () => {
    const time = mock.getTime('HH:mm:ss');
    expect(time).toMatch(/\d\d:\d\d:\d\d/);
});

