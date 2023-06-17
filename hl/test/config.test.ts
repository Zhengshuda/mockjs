import mock from '../src';
import { describe, it, expect } from 'vitest';

describe('定义配置', () => {
  it('查看配置是否定义成功', () => {
    mock.defineConfig({
        debugger: true,
    });

    const ret = mock.getConfig();
    expect(ret).haveOwnProperty('debugger', true);
  });
});
