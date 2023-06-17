interface MockObj {
    [key: string]: any
}
import { createRandomNum } from '../number/index'
import { getIdcard } from '../idCard/index'
import { getformatDate, randomTime } from '../dateAndTime/index'
import { getMoble } from '../moble/index'
import { createBoolen } from '../boolen/index';
import { createArrary } from '../arrary/index'
import { createName } from '../cname/index'

export function createObj(val: MockObj) {
    for (let key in val) {
        if (val[key] === 'number') {
            let len = Math.floor(Math.random() * 6) + 1
            val[key] = createRandomNum(len)
        } else if (val[key] === 'yyyy-MM-dd' || val[key] === 'yyyy/MM/dd') {
            val[key] = getformatDate(val[key])
        } else if (val[key] === 'HH:mm:ss' || val[key] === 'HH/mm/ss') {
            val[key] = randomTime(val[key])
        } else if (val[key] === 'idCard') {
            val[key] = getIdcard()
        } else if (val[key] === 'getPhone') {
            val[key] = getMoble()
        } else if (val[key] === 'getBoolen') {
            val[key] = createBoolen()
        } else if (val[key] === 'getCname') {
            val[key] = createName()
        } else if (val[key] instanceof Array) {
            let len = Math.floor(Math.random() * 10) + 1
            if (val[key].length === 1) {
                val[key] = createArrary(val[key][0], len);
            }
        } else if (val[key] instanceof Object) {
            val[key] = createObj(val[key])
        }
    }
    return val
}