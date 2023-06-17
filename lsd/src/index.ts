import { define, mock } from './mock';
// 3. 可以持续丰富文档
// 可参考 faker.js
// 4. 文档上可表明如何安装、使用、调试
// 5. 建议在当前的基础上丰富api，发散下需求，拓展库用法
// 6. 设计模式编码意识不足
// todo 生成身份证号码
// todo 改成类写法，AOP
// Todo 日志库，提供一个配置出来是否打日志，日志的 scope
const FMock = {
  mock,
  define,
}

export default FMock;
