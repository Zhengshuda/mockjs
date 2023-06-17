export type ColorFormat = 'hex' | 'hsl' | 'rgb' | 'rgba';

/**
 * @description 随机生成颜色
 * @param format 颜色格式
 * @returns 颜色值
 */
export default function color(format: ColorFormat = 'hex'): string {
    let color: string;

    // 生成随机的 R、G、B 值
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    // 根据 format 参数返回不同格式的颜色值
    switch (format) {
        case 'hsl':
            const h = Math.floor(Math.random() * 360);
            const s = Math.floor(Math.random() * 101);
            const l = Math.floor(Math.random() * 101);
            color = `hsl(${h}, ${s}%, ${l}%)`;
            break;
        case 'rgb':
            color = `rgb(${r}, ${g}, ${b})`;
            break;
        case 'rgba':
            const a = Math.random().toFixed(1);
            color = `rgba(${r}, ${g}, ${b}, ${a})`;
            break;
        default:
            let rHex, gHex, bHex;
            rHex = r.toString(16).length < 2 ? `0${r.toString(16)}` : r.toString(16);

            gHex = g.toString(16).length < 2 ? `0${g.toString(16)}` : g.toString(16);

            bHex = b.toString(16).length < 2 ? `0${b.toString(16)}` : b.toString(16);

            color = `#${rHex}${gHex}${bHex}`;
            break;
    }

    return color;
}
