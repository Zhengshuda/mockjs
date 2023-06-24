import { expect } from 'vitest';
import { Mock } from '../src/index'
const mock = new Mock()

export function checkName() {
    const name = mock.getCname()
    let len = name.length
    const reg = /^[\u4e00-\u9fa5]$/
    let count = 0
    for (let i = 0; i < len; i++) {
        if (reg.test(name[i])) {
            count++
        }
    }
    expect(count).toBe(len)
}

export function checkIdCard() {
    const idCard = mock.getIdCard()
    expect(idCard).toMatch(/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/)
}

export function checkDate() {
    const date = mock.getDate('yyyy-MM-dd');
    expect(date).toMatch(/[1-3]\d\d\d-\d\d-\d\d/);
}