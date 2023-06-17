# Mock
    一个创建虚拟数据的库，用于前端模拟后台返回的数据。支持创建大量随机的数据，且用户可以在基础上扩展相关的数据

### In modern browser
```ts
import { Mock } from 'Mock';
```

## 创建随机的字符串
Mock.getStr(len, 'A-Z || a-z || 0-9') // 创建自定义长度的随机字符串，包括大写字母，小写字母，以及数字

## 创建随机数字
Mock.getNum(len) // 创建随机长度的数字

## 创建随机的日期
Mock.getDate('yyyy-MM-dd' || 'yyyy/MM/dd') // 创建随机的日期,支持'yyyy-MM-dd','yyyy/MM/dd'这两种格式

## 创建随机的时间
Mock.getTime('HH:mm:ss' || 'HH/mm/ss') // 创建随机的时间, 支持'HH:mm:ss','HH/mm/ss'这两种格式

## 创建随机的身份证
Mock.getIdCard() // 创建随机的身份证

## 创建随机的电话号码
Mock.getPhone() // 创建随机的电话号码

## 创建随机的中文名字
Mock.getCname() // 创建随机的中文名

## 创建用户自定义的对象

Mock.getObj({
  name: '111',
  ...
})

// 创建随机的对象，对象的值支持 getStr, getNum, getDate, getTime, getIdCard, getPhone, getCname, 对象的值如果不包括以上的值，则返回用户自己输入的值

## 创建用户自定义的数组
Mock.getArr([], len)

// 创建随机的数组，第一个参数，数组的参数超过两个，则返回原数组，只有一个则匹配getStr, getNum, getDate, getTime, getIdCard, getPhone, getCname，这几个值，返回mock的对应数据，第二个参数对应随机mock的长度。如果不匹配以上类型，则返回原数组





