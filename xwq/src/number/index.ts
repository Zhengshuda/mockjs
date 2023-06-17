interface strInterFace {
    input: '0-9'
}

// 创建随机字符串
function createRandomChar(c: strInterFace["input"]) {
    return String.fromCharCode(Math.trunc(Math.random() * 10) + 48);
};

function crateRandomString(length: number, val: strInterFace["input"]) {
    let str = '';
    for (let i = 0; i < length; i++) str += createRandomChar(val);
    return str;
}

export function createRandomNum(len:number) {
    return parseInt(crateRandomString(len, '0-9'));
}

