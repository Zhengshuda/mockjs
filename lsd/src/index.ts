import { define, mock } from './mock';
import { setEnv } from './mock/env';

// 1. 新增一些异常场景
// 3. 可以持续丰富文档
// 可参考 faker.js
// 4. 文档上可表明如何安装、使用、调试
// 5. 建议在当前的基础上丰富api，发散下需求，拓展库用法
// 6. 设计模式编码意识不足
// todo 生成身份证号码
// define 函数修改
// todo 改成类写法，AOP
const FMock = {
  mock,
  define,
  setEnv
}

export default FMock;
