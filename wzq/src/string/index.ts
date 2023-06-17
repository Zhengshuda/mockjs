import {strInterFace} from '../const'

function createRandomChar(c: strInterFace["input"]) {
    switch (c) {
        case 'A-Z':
            return String.fromCharCode(Math.trunc(Math.random() * 25) + 65);
        case 'a-z':
            return String.fromCharCode(Math.trunc(Math.random() * 25) + 97);
        case '0-9':
        default:
            return String.fromCharCode(Math.trunc(Math.random() * 10) + 48);
    }
}

// 创建随机的字符串
export function crateRandomString(length: number, val: strInterFace["input"]) {
    let str = '';
    for (let i = 0; i < length; i++) str += createRandomChar(val);
    return str;
}

