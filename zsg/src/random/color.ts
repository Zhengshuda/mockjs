export type ColorFormat = 'hex' | 'hsl' | 'rgb' | 'rgba';

/**
 * @description 随机生成颜色
 * @param format 颜色格式
 * @returns 颜色值
 */
export default function color(format: ColorFormat = 'hex'): string {
    let color: string;

    // 生成随机的 R、G、B 值
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

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
            color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
            break;
    }

    return color;
}
