import { it, expect } from 'vitest';
import { Mock } from '../../src/index'
const mock = new Mock()

it('数组测试, 随机字符串', () => {
    const arr = mock.getArr('srt', 3)
    expect(arr).toEqual(['srt', 'srt', 'srt'])
})

it('数组测试, 随机数字', () => {
    const arr = mock.getArr(1213, 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toBeTypeOf('number')
    }
})

it('数组测试, 随机日期，格式yyyy-MM-dd', () => {
    const arr = mock.getArr('yyyy-MM-dd', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toMatch(/[1-3]\d\d\d-\d\d-\d\d/);
    }
})

it('数组测试, 随机日期，格式yyyy/MM/dd', () => {
    const arr = mock.getArr('yyyy/MM/dd', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toMatch(/[1-3]\d\d\d\/\d\d\/\d\d/);
    }
})

it('数组测试, 随机时间，格式HH:mm:ss', () => {
    const arr = mock.getArr('HH:mm:ss', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toMatch(/\d\d:\d\d:\d\d/);
    }
})

it('数组测试, 随机时间，格式HH/mm/ss', () => {
    const arr = mock.getArr('HH/mm/ss', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toMatch(/\d\d\/\d\d\/\d\d/);
    }
})

it('数组测试, 随机身份证', () => {
    const arr = mock.getArr('idCard', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toMatch(/^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}([0-9]|x|X)$/)
    }
})

it('数组测试, 随机电话', () => {
    const arr = mock.getArr('getPhone', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toMatch(/^1[3456789]\d{9}$/);
    }
})

it('数组测试, 随机布尔值', () => {
    const arr = mock.getArr('getBoolen', 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toBeTypeOf('boolean')
    }
})

it('数组测试, 随机姓名', () => {
    const arr = mock.getArr('getCname', 3)
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i]
        let len = name.length
        const reg = /^[\u4e00-\u9fa5]$/
        let count = 0
        for (let j = 0; j < len; j++) {
            if (reg.test(name[j])) {
                count++
            }
        }
        expect(count).toBe(len)
    }
})

it('数组测试, 随机object', () => {
    const arr = mock.getArr({
        name: '吴振全',
        age: 11,
    }, 3)
    for (let i = 0; i < arr.length; i++) {
        expect(arr[i]).toEqual({
            id: i + 1,
            name: '吴振全',
            age: 11
        })
    }
})