import extend from 'src/custom/extend';
import int from 'src/random/int';

/** 扩展身份证的随机函数 */
export default function setup() {
  // 生成随机的18位身份证号码
  const generateIdCard = () => {
    const idCard = [];
    // 生成前17位数字
    for (let i = 0; i < 17; i++) {
      idCard.push(int(0, 9));
    }
    // 生成最后一位校验码
    const checkCode = getCheckCode(idCard.join(''));
    idCard.push(checkCode);
    return idCard.join('');
  };

  // 计算身份证号码的校验码
  const getCheckCode = (idCard: string) => {
    const weightFactors = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodes = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let sum = 0;
    for (let i = 0; i < 17; i++) {
      sum += parseInt(idCard.charAt(i)) * weightFactors[i];
    }
    const mod = sum % 11;
    return checkCodes[mod];
  };

  extend('idCard', () => {
    return generateIdCard();
  });
}
