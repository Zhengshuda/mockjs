# mockjs

批量生成大量的随机数据的工具库

### 基础随机函数
#### random.int
生成随机整数
```ts
/**
* @param: min 最小值
* @param: max 最大值
* /
int:(min: number, max: number) => number;
```
demo
```ts
const val = mock.random.int(-1, 20); // -1 ~ 20 的随机整数
```

#### random.float
生成随机浮点数
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
const val = mock.random.float(-21.2, 20.3, 1, 3); // -21.2 ~ 20.3 的随机小数，小数位数为 1 ~ 3 位
```

#### random.string
生成随机字符串
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
const val = mock.random.string(1, 10, 'a-z'); // 只包含 a-z 长度为 1~10的字符串
```

#### random.datetime
生成随机日期与时间
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
const val = mock.random.datetime('yyyy-MM-dd HH:mm:ss'); // 2034-11-22 12:34:30
```
#### random.array
生成随机数组
```ts
/**
* @param: min 最少长度
* @param: max 最大长度
*/
array: (min: number, max: number, pool: Array) => Array;
```
demo
```ts
const val = mock.random.array(1, 2, [1, '2', '3', 4]);
```

### 解析 json 模板批量生成数据
如果需要解析 json 模板可以使用 json2mock 方法，批量生成数据
```ts
/*
* @param json 对象模板
*/
json2mock: (json: Object) => Object;
```
demo
```ts
const val = mock.parser.json2mock({ 
	'name': '@string(4,6)',
	'age': '@int(1, 100)',
	'body': {
		'height': '@float(0,3)',
	}
}); // 随机对象，例如：{ name: 'jack', age: 18, { height: 1.82 } }
```

### 扩展随机函数
如果觉得基础的函数不足以满足你的需求，可使用 extend 自定义扩展函数

```ts
/**
* @param: name 规则名称
* @param: callback 规则具体实现
*/
extend: (name: string, callback: Function) => void;
```
demo
```ts
// 扩展 ip 随机函数
mock.extend('ip', () => {
    const { int } = mock.random;
    return int(1, 255) + '.' + int(0, 255) + '.' + int(0, 255) + '.' + int(0, 255);
});

// 使用 ip 扩展
const ip = mock.random.ip(); // 10.200.10.13

// 同时扩展的函数也能值 json 模板中使用
mock.json2mock({ 'ip': '@ip()' }); // { ip: '10.200.10.13' };
```

