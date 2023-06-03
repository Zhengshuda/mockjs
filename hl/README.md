# mockjs

批量生成大量的随机数据的工具库


## Getting started

### step 1 安装

```shell
yarn add @sxf/mockjs
```

### step 2 使用

```ts
import mock from '@sxf/mockjs';

const num = mock.random.int(1, 10);
console.log(num); // 1 ~ 10 的随机整数
```

## API 
###  random
包含一些基础的随机函数
- int 生成随机整数
- float 生成随机小数
- string 生成随机字符串
- datetime 生成随机日期与时间
- array 生成随机数组

#### int
```ts
/**
* @param: min 最小值
* @param: max 最大值
*/
int:(min: number, max: number) => number;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.random.int(-1, 20);
console.log(val); // -1 ~ 20 的随机整数
```

#### float
```ts
/**
* @param: min 最小值
* @param: max 最大值
* @param: dmin 小数最小长度
* @param: dmax 小数最大长度
*/
float:(min: number, max: number, dmin: number, dmax: number) => number;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.random.float(-21.2, 20.3, 1, 3);
console.log(val); // -21.2 ~ 20.3 的随机小数，小数位数为 1 ~ 3 位
```

#### string
```ts
/**
* @param: min 最小长度
* @param: max 最大长度
* @param: pool 字符集
*/
string:(min: number, max: number, pool: string) => string;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.random.string(1, 10, 'a-z');
console.log(val); // 只包含 a-z 长度为 1~10的字符串
```

#### datetime
```ts
/**
* @param: format 日期与时间格式
* @param: start 开始时间
* @param: end 结束时间
*/
datetime:(format: string, start: Date, end: Date) => string;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.random.datetime('yyyy-MM-dd HH:mm:ss');
```
#### array
```ts
/**
* @param: min 最少长度
* @param: max 最大长度
*/
array: (min: number, max: number, pool: Array) => Array;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.random.array(1, 2, [1, '2', '3', 4]);
```

### custom
自定义扩展方法
- extend 扩展自定义规则
- use 使用字定义规则

#### extend
```ts
/**
* @param: name 规则名称
* @param: callback 规则具体实现
*/
extend: (name: string, callback: Function) => void;
```

#### use
```ts
/**
* @param: name 规则名称
*/
use: (name: string) => Function;
```
demo
```ts
// 扩展 ip 随机函数
mock.custom.extend('ip', () => {
    const { int } = mock.random;
    return int(1, 255) + '.' + int(0, 255) + '.' + int(0, 255) + '.' + int(0, 255);
});

// 使用 ip 扩展
const ipRandom = mock.custom.use('ip');
const ipMock = ipRandom(); // 10.200.10.13
```

### parser
解析字符串或正则表达式模板
- json2mock 将 json 对象解析成 mock 数据
- reg 将正则表达式解析成 mock 数据

#### json2mock
```ts
/*
* @param json 对象模板
*/
json2mock: (json: Object) => Object;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.parser.json2mock({ 
	'name': '@string(4,6)',
	'age': '@int(1, 100)',
});

console.log(val); // 随机对象，例如：{ name: 'jack', age: 18 }
```
#### reg
```ts
/*
* @param r 正则表达式
*/
reg: (r: RegExp) => string;
```
demo
```ts
import mock from '@sxf/mockjs';

const val = mock.parser.reg(/[1-9]\d/);

console.log(val); // 满足正则的随机字符，例如：99
```