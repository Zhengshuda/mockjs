# feather-mock
feather project homework
## 功能
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
})
```

### 生成随机值

- 支持生成随机字符串（string）、数字（integer）、布尔值（boolean）、日期（date）、时间（time）等基本数据类型。
- 支撑生成特定格式：手机号（phone）
- FMock.mock('@xxx|ruleStr') 方式调用，例如 FMock.mock('@string|min=10&max=40')
- 通过 ruleStr传参，传参仿照 url 传参形式
#### 字符串 参数

- 生成指定长度的字符串
- 限制字符串最小长度
- 限制字符串最大长度
- 字符串长度应在1~100之间
| 参数 | 描述 |
| --- | --- |
| min?: integer | 最短长度，大于1 |
| max?: number | 最大长度，小于100 |
| len?: number | 固定长度（优先级高） |

#### 整数 参数
| 参数 | 描述 |
| --- | --- |
| min?: integer | 最短长度，大于1 |
| max?: number | 最大长度，小于100 |

#### 日期 参数
| 参数 | 描述 |
| --- | --- |
| format | 默认YYYY-MM-DD，参考[dayjs官网]([https://dayjs.gitee.io/docs/zh-CN/display/format](https://dayjs.gitee.io/docs/zh-CN/display/format)) |

#### 时间 参数
| 参数 | 描述 |
| --- | --- |
| format | 默认HH:mm:ss，参考[dayjs官网]([https://dayjs.gitee.io/docs/zh-CN/display/format](https://dayjs.gitee.io/docs/zh-CN/display/format)) |

### 生成自定义数据
传入的为一个对象，键为唯一名称，不能跟已有的重复，值为函数类型。
```javascript
// 定义
FMock.define({
  testDefine: function() {
    return 'testDefine';
  }
});
// 使用
FMock.mock('@testDefine');
```
### 生成对象、数组
#### 数组
通过 FMock.mock([xxx])的方式来创建数组，通过数据模板可以传入额外的属性（见数据模板）。
##### 参数：
| 参数 | 描述 |
| --- | --- |
| min?: integer | 最短重复次数，大于1 |
| max?: number | 最大重复次数，小于等于1000 |
| count?: number | 重复次数 |

例：
```javascript
FMock.mock([1, '@phone', 3]);
FMock.mock('array2|count=2': ['1', 2]);
```
#### 对象
通过给 FMock.mock(opt) 传入对象的方法来创建对象，通过数据模板可以传入额外的属性（见数据模板）。
```javascript
FMock.mock({
  phone: '@phone',
}
```
### 
