# feather-mock
feather project homework
## 功能
### 生成随机值

- 支持生成随机字符串、数字、布尔值、日期、时间等基本数据类型。
- FMock.Random.xxx() 均支持 FMock.mock('@xxx') 方式调用，例如 FMock.Random.phone() 等价于 FMock.mock('@phone')
#### 字符串
FMock.Random.string(option)

- 生成指定长度的字符串
- 限制字符串最小长度
- 限制字符串最大长度
- 字符串长度应在1~100之间
| 参数 | 描述 |
| --- | --- |
| min?: integer | 最短长度，大于1 |
| max?: number | 最大长度，小于100 |
| len?: number | 固定长度（优先级高） |

#### 整数
FMock.Random.integer(opt)

| 参数 | 描述 |
| --- | --- |
| min?: integer | 最短长度，大于1 |
| max?: number | 最大长度，小于100 |

#### 布尔值
FMock.Random.boolean()
#### 日期
FMock.Random.date(format)
format格式默认YYYY-MM-DD，参考[dayjs官网]([https://dayjs.gitee.io/docs/zh-CN/display/format](https://dayjs.gitee.io/docs/zh-CN/display/format))
#### 时间
FMock.Random.time(format)
format格式默认HH:mm:ss，参考[dayjs官网]([https://dayjs.gitee.io/docs/zh-CN/display/format](https://dayjs.gitee.io/docs/zh-CN/display/format))
#### 手机号码
Random.phone()
### 生成自定义数据类型
传入的为一个对象，键为唯一名称，不能跟已有的重复，值为函数类型。
```javascript
// 定义
Random.define({
  testDefine: function() {
    return 'testDefine';
  }
});
// 使用
Random.testDefine();
FMock.mock('@testDefine');
```
### 生成对象、数组 类型
#### 数组
通过 FMock.mock([xxx])的方式来创建数组，通过数据模板可以传入额外的属性（见数据模板）。
当 array 作为属性值时，可以传递参数：

| 参数 | 描述 |
| --- | --- |
| min?: integer | 最短重复次数，大于1 |
| max?: number | 最大重复次数，小于等于1000 |
| count?: number | 重复次数 |

```javascript
FMock.mock([1, '@phone', 3]);
```
#### 对象
通过给 FMock.mock(opt) 传入对象的方法来创建对象，通过数据模板可以传入额外的属性（见数据模板）。
```javascript
FMock.mock({
  phone: '@phone',
}
```
### 数据模板
FMock.mock(template);
template中的每个属性由 3 部分构成：**属性名（**name**）、参数（**rule**）、属性值（**value）：
` 'name|rule': value `
**注意：**

- _属性名_ 和 _生成规则_ 之间用竖线 | 分隔。
- _参数_ 是可选的，格式采用跟 url 传参一样。
- **参数 的 含义 需要依赖 _属性值的类型_ 才能确定。**
- _属性值_ 中可以含有 @占位符。
- _属性值_ 还指定了最终值的初始值和类型。

例：
```javascript
FMock.mock({
  'integer|min=4&max=10': '@integer',
  phone: '@phone',
  array1: [1, '@string', 3],
  'array2|count=2': ['1', 2],
  obj1: {
    phone: '@phone',
  },
  'func1|param1=hello&param2=world': function({param1, param2}) {
    return param1 + ' ' + param2;
  },
  count: 3
}
```

