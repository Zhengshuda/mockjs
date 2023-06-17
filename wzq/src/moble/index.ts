// 生成随机手机号码
export function getMoble() {
    const prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    let i = Math.round(10 * Math.random());
    let prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
        prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix
}
