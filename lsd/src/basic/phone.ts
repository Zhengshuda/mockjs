import logger from "../utils/logger";
import Basic from ".";

const phone = function() {
  let res = '1';
  const rangeArr = [3,4,5,7,8];
  const index = Basic.integer({ min: 0, max: 4});
  res += rangeArr[index];
  for (let i = 0; i < 9; i++) {
    res += Basic.integer({ min: 0, max: 9 });
  }
  logger.debug('生成手机号：' + res);
  return res;
}

export default phone;