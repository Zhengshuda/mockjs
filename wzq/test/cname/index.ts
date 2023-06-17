import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('cnameTest', () => {
    const name = mock.getCname()
    let len = name.length
    const reg = /^[\u4e00-\u9fa5]$/
    let count = 0
    for(let i = 0; i < len; i++) {
        if(reg.test(name[i])) {
            count++
        }
    }
    expect(count).toBe(len)
})