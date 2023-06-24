import { strInterFace } from '../const'

function createRandomChar(c: strInterFace["input"]) {
    return String.fromCharCode(Math.trunc(Math.random() * 10) + 48);
};

function crateRandomString(length: number, val: strInterFace["input"]) {
    let str = '';
    for (let i = 0; i < length; i++) str += createRandomChar(val);
    return str;
}

// 获取随机的数字
export function createRandomNum(len: number) {
    let num = parseInt(crateRandomString(len, '0-9'))
    return num
}
