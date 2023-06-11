import { strInterFace, stringType, crateRandomString } from '../const'


// 生成随机区间范围内长度的字符串
function getRandgeLenNum(val: string, type?: stringType['type']) {
    if (type) {
        const first: string = val[val.length - 2]
        const last: string = val[val.length - 5]
        console.log(first, last, 'cesh')
        const len: number = parseInt(first) + Math.floor(Math.random() * (parseInt(last) - parseInt(first))) + 1
        const obj: any = {
            lower: 'a-z',
            upper: 'A-Z',
            number: '0-9',
        }
        if (obj[type]) {
            return crateRandomString(len, obj[type])
        }
        console.error('输入参数的格式有误')
    }
    const first: string = val[8]
    const last: string = val[11]
    const len: number = parseInt(first) + Math.floor(Math.random() * (parseInt(last) - parseInt(first))) + 1
    const flag: strInterFace["input"] = Math.floor(Math.random() * 2) === 0 ? 'A-Z' : 'a-z'
    return crateRandomString(len, flag)
}

// 生成确定长度的字符串
function getLenNum(val: string, type?: stringType['type']) {
    if (type) {
        const len: number = parseInt(val[val.length - 2])
        const obj: any = {
            lower: 'a-z',
            upper: 'A-Z',
            number: '0-9',
        }
        return crateRandomString(len, obj[type])
    }
    const len: number = parseInt(val[8])
    const flag: strInterFace["input"] = Math.floor(Math.random() * 2) === 0 ? 'A-Z' : 'a-z'
    return crateRandomString(len, flag)
}

// 生成随机长度的字符串
function getLen(val: string) {
    const first: number = Math.floor(Math.random() * 5)
    const len: number = first + Math.floor(Math.random() * 5)
    const flag: strInterFace["input"] = Math.floor(Math.random() * 2) === 0 ? 'A-Z' : 'a-z'
    return crateRandomString(len, flag)
}


function getLimitTypeAndRangeNum(val: string) {
    const firstStr: number = val.indexOf('"') + 1
    const lastStr: number = val.lastIndexOf('"')
    const str: any = val.slice(firstStr, lastStr)
    return getRandgeLenNum(val, str)
}

function getLimitTypeAndNum(val: string) {
    const firstStr: number = val.indexOf('"') + 1
    const lastStr: number = val.lastIndexOf('"')
    const str: any = val.slice(firstStr, lastStr)
    return getLenNum(val, str)
}


export function getString(val: string) {
    if (/@string/.test(val)) {
        if (/@string\(\d, \d\)/.test(val)) {
            return getRandgeLenNum(val)
        } else if (/@string\(\d\)/.test(val)) {
            return getLenNum(val)
        } else if (/@string\(\)/.test(val)) {
            return getLen(val)
        } else if (/@string\("[a-z]+", \d, \d\)/.test(val)) {
            return getLimitTypeAndRangeNum(val)
        } else if (/@string\("[a-z]+", \d\)/.test(val)) {
            return getLimitTypeAndNum(val)
        } else {
            console.error('传入的参数有错')
        }
    } else {
        console.error('传入的参数有错')
    }
}






