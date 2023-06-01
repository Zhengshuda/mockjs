import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成时间戳', () => {
  it('生成时间戳', () => {
    const ret = mock.random.timestamp();
    expect(ret).to.be.a('number');
    expect(ret).to.satisfy((timestamp: number) => timestamp > 0 && timestamp < Date.now());
  });
});
