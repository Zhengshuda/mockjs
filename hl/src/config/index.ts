const config = {
    /** debugger 模式，拥有日志等系统 */
    debugger: false,
};

export function defineConfig(define: Partial<typeof config>) {
    Object.assign(config, define);
}

export function getConfig() {
    return { ...config };
}