import { it } from 'vitest';
import { Mock } from '../../src/index'
import { checkName, checkIdCard, checkDate } from '../utils'
const mock = new Mock()

it('验证随机对象', () => {
    const obj = mock.getObj({
        name: 'getCname',
        id: 'idCard',
        date: 'yyyy-MM-dd',
        children: mock.getArr({
            name: 'getCname',
            idCard: 'idCard',
            date: 'yyyy-MM-dd',
        }, 3)
    })
    for (let key in obj) {
        if (obj[key] === 'getCname') {
            checkName()
        } else if (obj[key] === 'idCard') {
            checkIdCard()
        } else if (obj[key] === 'yyyy-MM-dd') {
            checkDate()
        } else if (obj[key] === 'children') {
            checkChildren(obj[key])
        }
    }
})

function checkChildren(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        for (let key in arr[i]) {
            if (arr[i][key] === 'getCname') {
                checkName()
            } else if (arr[i][key] === 'idCard') {
                checkIdCard()
            } else if (arr[i][key] === 'yyyy-MM-dd') {
                checkDate()
            }
        }
    }
}

