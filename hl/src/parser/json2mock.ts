import { logger } from '../helper/logger';
import tempalte from './tempalte';

export default function json2mock(json: Record<string, any>) {
  const ret: Record<string, any> = {};
  for (const [key, value] of Object.entries(json)) {
    if (typeof value === 'string') {
      logger('json2mock', `template parser ${value}`);
      ret[key] = tempalte(value);
    } else if (String(value) === '[object Object]') {
      ret[key] = json2mock(value);
    } else {
      ret[key] = value;
    }
  }

  return ret;
}
