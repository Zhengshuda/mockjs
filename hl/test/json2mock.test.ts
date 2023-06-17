import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('json 字符解析为 mock', () => {
  it('json 字符解析为 mock', () => {
    const ret = mock.json2mock({
      "name": "@string(1,5)",
      "age": "@int(1,80)",
      "body": {
          "wight": "@int(0,180)",
          "height": "@float(0,180)"
      },
      "birthday": "@datetime(YYYY/MM/DD)",
      "a": "b",
      "c": [
          "d"
      ],
    });

    expect(ret.name).to.be.a('string');
    expect(ret.body.wight).to.be.a('number');
    expect(ret.body.height).to.be.a('number');
    expect(ret.birthday).toMatch(/\d\d\d\d\/\d\d\/\d\d/);
  });
});
