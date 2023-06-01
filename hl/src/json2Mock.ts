import parser from './parser';

export default function json2Mock(json: Record<string, any>) {
  const ret: Record<string, any> = {};
  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'string') {
      ret[key] = parser(value);
    } else if (String(value) === '[object Object]') {
      ret[key] = json2Mock(value);
    } else {
      ret[key] = value;
    }
  }

  return ret;
}
