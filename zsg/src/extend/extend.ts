export const customFunc: Record<string, (...args: any) => any> = {};

export default function extend(name: string, generator: (...args: any) => any) {
    customFunc[name] = generator;
};
