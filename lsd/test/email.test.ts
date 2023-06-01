import { it, expect } from 'vitest';
import FMock from '../src/index';
const Random = FMock.Random;

// function type
it('email type', () => {
  expect(Random.email).toBeTypeOf('function');
  expect(Random.email()).toBeTypeOf('string');
});

// todo 添加正则校验
// it('email reg test', () => {
//   const res1 = Random.email();
//   expect(res1).toMatch(/^1[34578]\d{9}$/);
// });
