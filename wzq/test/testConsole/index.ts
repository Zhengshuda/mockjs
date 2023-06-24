import {Mock} from '../../src/index'

let mock = new Mock()
let str = mock.getStr(9, 'a-z');
let num = mock.getNum(4);
let boolen = mock.getBoolen()
let date = mock.getDate('yyyy-MM-dd')
let time = mock.getTime('HH:mm:ss')
let idCard = mock.getIdCard()
let phone = mock.getPhone()
let cname = mock.getCname()
let arr = mock.getArr(
  {
    name: 'getCname',
    age: 'number',
    date: 'yyyy-MM-dd',
    idCard: 'idCard'
  }, 3
)

let obj = mock.getObj(
    {
        name: 'getCname',
        age: 11,
        idCard: 'idCard',
        date: 'yyyy-MM-dd',
        children: mock.getArr({
            name: 'getCname',
            age: 1231,
            idCard: 'idCard',
            date: 'yyyy-MM-dd',
        }, 3)
    }
)
mock.extend('add', (val:string, val2:string) => {
    return val + val2
})

let addStr = mock.add('吴', '振全')
console.log(addStr, 'addStr-----')

console.log(str, 'str------')
console.log(num, 'num-----')
console.log(boolen, 'boolen----')
console.log(date, 'date---')
console.log(time, 'time-----')
console.log(idCard, 'idCard-----')
console.log(phone, 'phone-------')
console.log(cname, 'cname------')
console.log(arr, 'arr---------')

console.log(obj, 'obj--------')