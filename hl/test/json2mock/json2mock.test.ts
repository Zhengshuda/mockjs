import data from './data.json';
import mock from '../../src';
import { describe, it, expect } from 'vitest';

describe('json 字符解析为 mock', () => {
  it('json 字符解析为 mock', () => {
    const ret = mock.json2Mock(data);

    expect(ret.name).to.be.a('string');
    expect(ret.body.wight).to.be.a('number');
    expect(ret.body.height).to.be.a('number');
    expect(ret.birthday).toMatch(/\d\d\d\d\/\d\d\/\d\d/);
  });
});
