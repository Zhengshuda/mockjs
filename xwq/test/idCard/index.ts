import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('idCardTest', () => {
    const idCard = mock.getIdCard()
    expect(idCard).toMatch(/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/)
})