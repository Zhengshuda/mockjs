## Introduction

**支持生成多种类型的大量 mock 数据，同时也支持扩展自定义数据类型**

## Getting started with `mockts`

### step 1 install

```shell
yarn add @sxf/mockts
```

## How to use

### int

`(min?: number, max?: number) => number`

```ts
import Mock from '@sxf/mockts';

const randomNum = Mock.int();
console.log(randomNum); // 随机整数

const randomNumInRange = Mock.int(1, 10);
console.log(randomNumInRange); // 1-10 范围内的随机整数
```

### float

`({min?: number; max?: number; minLen?: number; maxLen?: number}) => number`

```ts
import Mock from '@sxf/mockts';

const randomNum = Mock.float();
console.log(randomNum); // 随机小数

const randomNumInRange = Mock.float({min: 10, max: 10, minLen: 1, maxLen: 5});
console.log(randomNumInRange); // 10.xxx 其中 xxx 长度范围在 1-5 之间
```

### char

`(charSet?: string) => string`

```ts
import Mock from '@sxf/mockts';

const randomChar = Mock.char();
console.log(randomChar); // 大小写英文字母及自然数中的随机字符

const randomCharInSet = Mock.char('abcd');
console.log(randomCharInSet); // abcd 中的随机字符
```

### string

`(charSet?: string, minLen?: number, maxLen?: number) => string`

```ts
import Mock from '@sxf/mockts';

const randomStr = Mock.string();
console.log(randomStr); // 随机长度字符串

const randomStrInRange = Mock.string('abcd', 1, 5);
console.log(randomNumInRange); // 字符串长度范围 1-5 之间，且每个字符都是 abcd 中的随机一位
```

### array

`(generator: () => any | Array<any>, minLen?: number, maxLen?: number) => Array<any>`

```ts
import Mock from '@sxf/mockts';

// 传入数组
const arrTemplateOne = [1, 2, 3, 4, 5];
const randomArr = Mock.array(arrTemplateOne, 1, 5);
console.log(randomArr.every(item => arrTemplateOne.includes(item))); // true

// 传入构造函数
const arrItemGenerator = () => {
    const arrTemplate = [1, 2, 3, 4, 5];
    const index = Mock.int(0, arrTemplate.length);
    
    return arrTemplate[index];
};
const randomArrTwo = Mock.array(arrItemGenerator, 1, 5);
console.log(randomArrTwo.every(item => arrTemplateOne.includes(item))); // true
```

### object

`(generator: object, minLen?: number, maxLen?: number) => object`

```ts
import Mock from '@sxf/mockts';

const objTemplate = {
  a: 1,
  b: 2,
  c: 3,
};
const randomObj = Mock.object(objTemplate, 1, 3);
console.log(randomObj); // 项数范围为 1-3，其中每一项都是 objTemplate 的子项
```

### date

`(format?: string) => string`

```ts
import Mock from '@sxf/mockts';

const randomTimeOne = Mock.date();
console.log(randomTimeOne); // 2015-08-25

const randomTimeTwo = Mock.date('yy-MM-dd');
console.log(randomTimeTwo); // 72-06-06
```

### time

`(format?: string) => string`

```ts
import Mock from '@sxf/mockts';

const randomTimeOne = Mock.time();
console.log(randomTimeOne); // 17:17:45

const randomTimeTwo = Mock.time('A HH:mm:ss');
console.log(randomTimeTwo); // PM 21:52:04
```

### dateTime

`(format?: string) => string`

```ts
import Mock from '@sxf/mockts';

const randomTimeOne = Mock.dateTime();
console.log(randomTimeOne); // 2015-02-04 07:51:33

const randomTimeTwo = Mock.dateTime('yy-MM-dd a HH:mm:ss');
console.log(randomTimeTwo); // 73-02-04 pm 12:12:51
```

### now

`(format?: string) => string`

```ts
import Mock from '@sxf/mockts';

const nowTimeOne = Mock.now();
console.log(nowTimeOne); // 2023-06-03 17:42:28

const nowTimeTwo = Mock.now('yyyy-MM-dd HH:mm:ss SS');
console.log(nowTimeTwo); // 2023-06-03 17:42:28 230
```

### color

`(format?: string) => string`

```ts
import Mock from '@sxf/mockts';

const randomColorOne = Mock.color();
console.log(randomColorOne); // #b179f2

const randomColoTwo = Mock.color('rgb');
console.log(randomColoTwo); // rgb(242, 121, 160)
```

### regExp

`(reg: RegExp) => string`

```ts
import Mock from '@sxf/mockts';

const reg = /[a-z][A-Z][0-9]/;
const randomReg = Mock.regExp(reg);
console.log(randomReg); // xB7
```

### json2mock

`(json: Record<string, any>) => Record<string, any>`

```ts
import Mock from '@sxf/mockts';

const randomData = Mock.json2mock(json);
console.log(randomReg); // 符合所入参 json 格式的数据
```

### extend

`(name: string, generator: (...args: any) => any) => void`

```ts
import Mock from '@sxf/mockts';

const customGenerator = () => {...};
const randomData = Mock.extend('customName', customGenerator);

Mock.custom.customName(); // 调用自定义扩展的方法
```
