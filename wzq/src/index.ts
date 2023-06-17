import { crateRandomString } from './string/index'
import { createRandomNum } from './number/index'
import { getIdcard } from './idCard/index'
import { getformatDate, randomTime } from './dateAndTime/index'
import { getMoble } from './moble/index'
import { createBoolen } from './boolen/index';
import { createObj } from './obj/index'
import { createArrary } from './arrary/index'
import { createName } from './cname/index'
import { dateFormat, strInterFace, MockObj, arrType } from './const'

export class Mock {
    // 获取随机字符串
    getStr(len: number, val: strInterFace["input"]) {
        return crateRandomString(len, val)
    }
    // 获取随机数字
    getNum(len: number) {
        return createRandomNum(len)
    }
    // 获取随机布尔
    getBoolen() {
        return createBoolen()
    }
    // 获取随机的日期
    getDate(format: dateFormat["getDateFormat"]) {
        return getformatDate(format)
    }
    // 获取随机的时间
    getTime(format: dateFormat["getTimeFormat"]) {
        return randomTime(format)
    }
    // 获取随机的身份证
    getIdCard() {
        return getIdcard()
    }
    // 获取随机的电话号码
    getPhone() {
        return getMoble()
    }
    // 获取随机的对象
    getObj(val: MockObj) {
        return createObj(val)
    }
    // 获取随机的数组
    getArr(val: arrType['type'], len: number) {
        return createArrary(val, len)
    }
    // 获取随机的名字
    getCname() {
        return createName()
    }
    // 用户自己扩展新的方法
    extend(name: string, fun: Function) {
        Object.assign(Mock.prototype, {
            [name]: fun
        });
    }
}

