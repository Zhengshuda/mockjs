/** 日期与时间操作符 */
const patternLetters: Record<string, Function | keyof Date> = {
  yyyy: 'getFullYear',
  yy: function (date: Date) {
    return ('' + date.getFullYear()).slice(2);
  },

  MM: function (date: Date) {
    var m = date.getMonth() + 1;
    return m < 10 ? '0' + m : m;
  },
  M: function (date: Date) {
    return date.getMonth() + 1;
  },

  dd: function (date: Date) {
    var d = date.getDate();
    return d < 10 ? '0' + d : d;
  },
  d: 'getDate',

  HH: function (date: Date) {
    var h = date.getHours();
    return h < 10 ? '0' + h : h;
  },
  H: 'getHours',
  hh: function (date: Date) {
    var h = date.getHours() % 12;
    return h < 10 ? '0' + h : h;
  },
  h: function (date: Date) {
    return date.getHours() % 12;
  },

  mm: function (date: Date) {
    var m = date.getMinutes();
    return m < 10 ? '0' + m : m;
  },
  m: 'getMinutes',

  ss: function (date: Date) {
    var s = date.getSeconds();
    return s < 10 ? '0' + s : s;
  },
  s: 'getSeconds',

  SS: function (date: Date) {
    var ms = date.getMilliseconds();
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

/** 日期占位符正则。 */
const dateReg = new RegExp(`(${Object.keys(patternLetters).join('|')})`, 'g');

export default function formatDate(timestamp: number, format: string) {
  const date = new Date(timestamp);
  return format.replace(dateReg, ($0, flag) => {
    const pattern = patternLetters[flag];
    if (typeof pattern === 'function') {
      return pattern(date);
    }

    return (date[pattern] as Function)();
  });
}
