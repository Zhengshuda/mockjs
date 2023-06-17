/**
 * @file 日志打印
 */

import { getConfig } from "src/config";

const logMap = {
    error: console.error,
    warn: console.warn,
    info: console.info,
}

/**
 * @description 日志打印
 * @param key 日志关键字
 * @param message 信息
 * @param type 日志类型
 */
export function logger(key: string, message: string, type: 'error' | 'warn' | 'info' = 'info') {
    const config = getConfig();

    if (config.debugger) {
        logMap[type](`[${key}]: ${message}`);
    }
}