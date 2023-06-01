import context from './context';

/** 使用扩展的随机函数 */
export default function use(name: string) {
  return context[name];
}
