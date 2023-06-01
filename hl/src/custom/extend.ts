import context from './context';

/** 扩展随机函数 */
export default function extend(name: string, generator: (...arg: any) => any) {
  context[name] = generator;
}
