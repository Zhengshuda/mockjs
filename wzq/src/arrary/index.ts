import { createRandomNum } from '../number/index'
import { getIdcard } from '../idCard/index'
import { getformatDate, randomTime } from '../dateAndTime/index'
import { getMoble } from '../moble/index'
import { createBoolen } from '../boolen/index';
import { createName } from '../cname/index'


export function createArrary(val: any, len: number) {
    const arr: Array<any> = []
    for (let i = 0; i < len; i++) {
        if (typeof val === 'number') {
            arr.push(createRandomNum(len))
        } else if (val === 'yyyy-MM-dd' || val === 'yyyy/MM/dd') {
            arr.push(getformatDate(val))
        } else if (val === 'HH:mm:ss' || val === 'HH/mm/ss') {
            arr.push(randomTime(val))
        } else if (val === 'idCard') {
            arr.push(getIdcard())
        } else if (val === 'getPhone') {
            arr.push(getMoble())
        } else if (val === 'getBoolen') {
            arr.push(createBoolen())
        } else if(val === 'getCname') {
            arr.push(createName())
        } else if (val instanceof Object) {
            arr.push({
                id: i + 1,
                ...val
            })
        }
    }
    return arr;
}