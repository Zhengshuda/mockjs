/**
 * @file 日期工具函数
 */

/** 日期占位符集合 */
const patternLetters: Record<string, Function | keyof Date> = {
    yyyy: 'getFullYear',
    yy: function (date: Date) {
        return ('' + date.getFullYear()).slice(2);
    },

    MM: function (date: Date) {
        const m = date.getMonth() + 1;
        return m < 10 ? '0' + m : m;
    },
    M: function (date: Date) {
        return date.getMonth() + 1;
    },

    dd: function (date: Date) {
        const d = date.getDate();
        return d < 10 ? '0' + d : d;
    },
    d: 'getDate',

    HH: function (date: Date) {
        const h = date.getHours();
        return h < 10 ? '0' + h : h;
    },
    H: 'getHours',
    hh: function (date: Date) {
        const h = date.getHours() % 12;
        return h < 10 ? '0' + h : h;
    },
    h: function (date: Date) {
        return date.getHours() % 12;
    },

    mm: function (date: Date) {
        const m = date.getMinutes();
        return m < 10 ? '0' + m : m;
    },
    m: 'getMinutes',

    ss: function (date: Date) {
        const s = date.getSeconds();
        return s < 10 ? '0' + s : s;
    },
    s: 'getSeconds',

    SS: function (date: Date) {
        const ms = date.getMilliseconds();
        return (ms < 10 && '00' + ms) || (ms < 100 && '0' + ms) || ms;
    },
    S: 'getMilliseconds',

    A: function (date: Date) {
        return date.getHours() < 12 ? 'AM' : 'PM';
    },
    a: function (date: Date) {
        return date.getHours() < 12 ? 'am' : 'pm';
    },
    T: 'getTime',
};

/** 日期占位符正则 */
const dateLetterReg = new RegExp((function () {
    let result = []

    for (let i in patternLetters) result.push(i)

    return '(' + result.join('|') + ')'
})(), 'g');

/** 格式化日期 */
export function formatDate (date: Date, format: string) {
    return format.replace(dateLetterReg, ($0, flag) => {
        const letters = patternLetters[flag];
        
        return typeof letters === 'function'
            ? letters(date)
            : (date[letters] as Function)();
    });
};

/** 生成一个随机的 Date 对象 */
export function randomDate (min?: Date, max?: Date) {
    const minDate = min === undefined ? new Date(0) : min;
    const maxDate = max === undefined ? new Date() : max;

    return new Date(Math.random() * (maxDate.getTime() - minDate.getTime()));
};

/** 返回一个随机的日期字符串 */
export function date (format = 'yyyy-MM-dd') {
    return formatDate(randomDate(), format);
};

/** 返回一个随机的时间字符串*/
export function time (format = 'HH:mm:ss') {
    return formatDate(randomDate(), format);
};

/** 返回一个随机的日期和时间字符串*/
export function dateTime (format = 'yyyy-MM-dd HH:mm:ss') {
    return formatDate(randomDate(), format);
};

export default {
    formatDate,
    randomDate,
    date,
    time,
    dateTime,
};