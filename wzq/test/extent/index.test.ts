import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('mock扩展', () => {
    mock.extend('add', (val:string, val2:string) => {
        return val + val2
    })
    let name = mock.add('吴', '振全')
    expect(name).toBe('吴振全')
})