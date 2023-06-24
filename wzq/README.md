# Mock
    一个创建虚拟数据的库，用于前端模拟后台返回的数据。支持创建大量随机的数据，且用户可以在基础上扩展相关的数据

### In modern browser
```ts
import { Mock } from 'Mock';
```

## 创建随机的字符串
Mock.getStr(len, 'A-Z || a-z || 0-9') // 创建自定义长度的随机字符串，包括大写字母，小写字母，以及数字
举例
Mock.getStr(4, 'A-Z') // HJKL (随机大写4个字母) 


## 创建随机数字
Mock.getNum(len) // 创建随机长度的数字
举例
Mock.getNum(5)  // 12356

## 创建随机的日期
Mock.getDate('yyyy-MM-dd' || 'yyyy/MM/dd') // 创建随机的日期,支持'yyyy-MM-dd','yyyy/MM/dd'这两种格式
举例
Mock.getDate('yyyy/MM/dd') // 2014/05/08

## 创建随机的时间
Mock.getTime('HH:mm:ss' || 'HH/mm/ss') // 创建随机的时间, 支持'HH:mm:ss','HH/mm/ss'这两种格式
举例
Mock.getTime('HH/mm/ss') // 15/30/30

## 创建随机的身份证
Mock.getIdCard() // 创建随机的身份证
举例
Mock.getIdCard() // 360430199311040038

## 创建随机的电话号码
Mock.getPhone() // 创建随机的电话号码
举例 Mock.getPhone() // 13040806899

## 创建随机的中文名字
Mock.getCname() // 创建随机的中文名
举例 Mock.getCname() //吴振全

## 创建用户自定义的对象
Mock.getObj()
// 创建随机的对象，对象的值支持 getStr, getNum, getDate, getTime, getIdCard, getPhone, getCname, 对象的值如果不包括以上的值，则返回用户自己输入的值

例子1:
Mock.getObj({
  name: '111',
  id: 'getIdCard',
  num: 'getNum',
  date: 'getDate'
})

// {
  name: '111',
  id: 360403199311040038,
  num: 89,
  date: '2015-07-23'
}
例子2:
mock.getObj(
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

// {
      name: '毕冰洁',
      age: 11,
      idCard: '755680199709100354',
      date: '2012/05/22',
      children: [
        {
          id: 1,
          name: '孟春齐',
          age: 1231,
          idCard: '913310195810269984',
          date: '2013/01/06'
        },
        {
          id: 2,
          name: '史昕蕊',
          age: 1231,
          idCard: '654248200704290960',
          date: '2013/05/28'
        },
        {
          id: 3,
          name: '葛诗悦',
          age: 1231,
          idCard: '167900195807155023',
          date: '2012/04/11'
        }
      ]
    }

## 创建用户自定义的数组
Mock.getArr(val:arrType, len)

interface arrType {
    type: string | number | boolean | 'yyyy/MM/dd' | 'yyyy/MM/d' | 'HH:mm:ss'
    | 'HH/mm/ss' | 'idCard' | 'getPhone' | 'getBoolen' | 'getCname' | MockObj
}

// 创建随机的数组，第一个参数，可以是上述接口定义的这几个类型，返回mock的对应数据，第二个参数对应随机mock的长度
举例
Mock.getArr(3123, 6) // [3123, 3123, 3123, 3123, 3123, 3123]
如果参数是对象，对象里面的key如果是id，则会被覆盖，例子如下
Mock.getArr({
    id: '大大苏打'
    name: 'getCname',
    age: 'number',
    date: 'yyyy-MM-dd',
    idCard: 'idCard'
  }, 3)

 // [
      {
        id: 1,
        name: '岑欣源',
        age: 25920,
        date: '2014/04/11',
        idCard: '871821199710271470'
      },
      {
        id: 2,
        name: '褚添池',
        age: 1,
        date: '2014/09/24',
        idCard: '070352199304242524'
      },
      {
        id: 3,
        name: '金禹辰',
        age: 33777,
        date: '2014/09/08',
        idCard: '316408201307081055'
      }
]

## 扩展用户自定义的属性
mock.extend(val, fun)

举例
mock.extend('ceshi', (val:string, val2:string) => {
    return val + val2
})
mock.ceshi('2131', '3123123') // 21313123123

## 测试文件

在src/test/testConsole/index 文件里有全部的示例，都有打印，可以参考






