import int from './int';

export default function idCard() {
    // 随机生成省份编码
    const provinceCode = randomProvinceCode();

    // 随机地区编码
    const areaCode = randomAreaCode();

    // 随机生成出生日期
    const birthday = randomBirthday();

    // 随机生成顺序码
    const sequenceCode = randomSequenceCode();

    // 计算校验码
    const checkCode = calculateCheckCode(`${provinceCode}${areaCode}${birthday}${sequenceCode}`);

    // 拼接身份证号码
    const idNumber = `${provinceCode}${areaCode}${birthday}${sequenceCode}${checkCode}`;

    return idNumber;
}

function randomProvinceCode() {
    const provinceCodes = [
        '11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34',
        '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52',
        '53', '54', '61', '62', '63', '64', '65'
    ];

    return provinceCodes[int(0, provinceCodes.length - 1)];
}

function randomAreaCode() {
    return int(1000, 9999);
}

function randomBirthday() {
    const start = new Date(1900, 0, 1);
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const year = randomDate.getFullYear().toString();
    const month = (randomDate.getMonth() + 1).toString().padStart(2, '0');
    const day = randomDate.getDate().toString().padStart(2, '0');

    return `${year}${month}${day}`;
}

function randomSequenceCode() {
    return String(int(0, 999)).padStart(3, '0');
}

function calculateCheckCode(idNumber: string) {
    const coefficientList = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const checkCodeMap = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    let sum = 0;
    for (let i = 0; i < 17; i++) {
        sum += parseInt(idNumber[i]) * coefficientList[i];
    }

    const checkCodeIndex = sum % 11;
    return checkCodeMap[checkCodeIndex];
}
