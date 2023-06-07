# Mock
    一个创建虚拟数据的库，用于前端模拟后台返回的数据。支持创建大量随机的数据，且用户可以在基础上扩展相关的数据

### In modern browser
```ts
import { Mock } from 'Mock';
```

## 创建随机的字符串
Mock.mock('@string') // 创建随机字符串不限制长度
Mock.mock('@string(5)') // 创建随机字符串限制长度

## 创建随机数字
Mock.mock('@integer') // 创建随机的数字随机长度
Mock.mock('@integer(60, 100)') // 创建60-100之间的随机数字

## 创建随机的日期
Mock.mock('@date') // 创建随机的日期

## 创建随机的时间
Mock.mock('@time') // 创建随机的时间

## 创建随机的身份证
Mock.mock('@idCard') // 创建随机的身份证

## 创建随机的电话号码
Mock.mock('@phone') // 创建随机的电话号码

## 创建用户自定义的属性
// 用户创建电话号码
Mock.extend({
    phone: function () {
        var phonePrefixs = ['132', '135', '189'] // 自己写前缀哈
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
    }
})

## 创建用户自定义的对象
// "string|1-10", 对象属性后面的数字表示创造的数量的范围

Mock.mock({
    "string|1-10": "★" ,
    "number|+1": 202,
    "boolean|1": true,
    "object|2": {
    "310000": "上海市",
    "320000": "江苏省",
    "330000": "浙江省",
    "340000": "安徽省",
    "array|1": [
        "AMD",
        "CMD",
        "UMD"
    ]
  }
})

## 校验真实数据 data 是否与数据模板 template 匹配。
var template = {
    name: 'value1'
}
var data = {
    name: 'value2'
}
Mock.valid(template, data)
// =>
[
    {
        "path": [
            "data",
            "name"
        ],
        "type": "value",
        "actual": "value2",
        "expected": "value1",
        "action": "equal to",
        "message": "[VALUE] Expect ROOT.name'value is equal to value1, but is value2"
    }
]




