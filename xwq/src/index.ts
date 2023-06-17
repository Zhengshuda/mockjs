import { crateRandomString } from './string/index'
import { createRandomNum } from './number/index'
import { getIdcard } from './idCard/index'
import { getformatDate, randomTime } from './dateAndTime/index'
import { getMoble } from './moble/index'
import { createBoolen } from './boolen/index';
import { createObj } from './obj/index'
import { createArrary } from './arrary/index'
import { createName } from './cname/index'

interface dateFormat {
    getDateFormat: "yyyy-MM-dd" | "yyyy/MM/dd"
    getTimeFormat: "HH:mm:ss" | "HH/mm/ss"
}

interface strInterFace {
    input: 'A-Z' | 'a-z' | '0-9'
}


interface MockObj {
    [key: string]: any
}

export class Mock {
    getStr(len: number, val: strInterFace["input"]) {
        return crateRandomString(len, val);
    }
    getNum(len: number) {
        return createRandomNum(len);
    }
    getBoolen() {
        return createBoolen()
    }
    getDate(format: dateFormat["getDateFormat"]) {
        return getformatDate(format)
    }
    getTime(format: dateFormat["getTimeFormat"]) {
        return randomTime(format)
    }
    getIdCard() {
        return getIdcard()
    }
    getPhone() {
        return getMoble()
    }
    getObj(val: MockObj) {
        return createObj(val)
    }
    getArr(val: any, len: number) {
        return createArrary(val, len)
    }
    getCname() {
        return createName()
    }
}
