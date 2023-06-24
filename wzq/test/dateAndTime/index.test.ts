import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('日期格式，yyyy-MM-dd', () => {
    const date = mock.getDate('yyyy-MM-dd');
    expect(date).toMatch(/[1-3]\d\d\d-\d\d-\d\d/);
});

it('日期格式，yyyy/MM/dd', () => {
    const date = mock.getDate('yyyy/MM/dd');
    expect(date).toMatch(/[1-3]\d\d\d\/\d\d\/\d\d/);
});

it('时间格式，HH:mm:ss', () => {
    const time = mock.getTime('HH:mm:ss');
    expect(time).toMatch(/\d\d:\d\d:\d\d/);
});

it('时间格式，HH/mm/ss', () => {
    const time = mock.getTime('HH/mm/ss');
    expect(time).toMatch(/\d\d\/\d\d\/\d\d/);
});

it('时间格式，HH/mm/ss', () => {
    const time = mock.getTime('HH/mm/ss');
    expect(time).toMatch(/\d\d\/\d\d\/\d\d/);
});


