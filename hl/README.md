# 设计文档

### api 设计
包含三块核心功能
- 基础随机函数（random）
- 解析字符及 json 对象，生成 mock 数据（parser 与 json2Mock）
- 自定义扩展随机函数及使用（custom）

#### 基础函数（random）
包含一些基础的随机函数
- array 生成随机数组，可自定义数组长度及内容
- bool 生成随机布尔
- char 生成随机字符，自定义字符集
- string 生成随机字符串，自定义字符长度及字符集
- date 生成随机日期，自定义日期格式
- time 生成随机时间，自定义时间格式
- timestamp 生成随机事件戳
- datetime 生成随机日期与时间，自定义日期与时间格式
- int 生成随机整数，可自定义最小值、最大值
- float 生成随机浮点数，可自定义最小值、最大值、小数位数

#### 解析字符及 json 对象生成 mock 数据
- parser 函数解析特定字符生成 mock 数据，例如字符 `int(0,10)` 即为生成最小值为0、最大值为 10 的整型数组
- json2Mock 解析 json 对象，内部调用了 parser 函数，能够批量将 json 模板文件转换为 mock 数据

#### 自定义扩展随机函数及使用（custom）
- 定义 context 对象存储当前扩展的自定义函数
- 使用 extend 方法扩展随机函数
- 使用 use 方法调用扩展的随机函数

例如：
```js
// 扩展 ip 随机函数
mock.custom.extend('ip', () => {
    const { int } = mock.random;
    return int(1, 255) + '.' + int(0, 255) + '.' + int(0, 255) + '.' + int(0, 255);
});

// 使用 ip 扩展
const ipRandom = mock.custom.use('ip');
const ipMock = ipRandom(); // 10.200.10.13
```

### UML
![uml](.\assets\uml.png)

### 文件目录结构
```js
- assets 静态资源目录
- test 测试代码
- src
    - random 基础随机函数文件目录
    - custom 自定义扩展随机函数及使用
        - context.ts 存储当前扩展的自定义函数
        - extend.ts 扩展自定义函数方法
        - use.ts 使用自定义函数方法
        - index.ts 批量导出文件
    - ext 自定义扩展，结合上述的自定义扩展方法实现扩展
        - idCard.ts 生成随机身份证号
        - phone.ts 生成随机电话号码
        - index.ts 批量导出文件
    - helper 工具函数目录
    - json2Mock.ts
    - parser.ts
    - index.ts 入口文件
```
