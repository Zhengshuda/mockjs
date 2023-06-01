import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('随机生成浮点型数值', () => {
  it('随机生成浮点型数值', () => {
    const ret = mock.random.float(-10, 10);

    expect(ret).to.be.a('number');
    expect(ret % 1).to.not.equal(0);
  });
});
