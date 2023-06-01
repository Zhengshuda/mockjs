import extend from 'src/custom/extend';
import int from 'src/random/int';

/** 扩展手机号 mock */
export default function setup() {
  extend('phone', () => {
    return '1' + int(3, 9) + int(0, 9) + int(10000000, 99999999).toString();
  });
}
