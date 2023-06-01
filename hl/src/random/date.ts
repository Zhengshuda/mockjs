import formatDate from 'src/helper/formatDate';
import timestamp from './timestamp';

/**
 * 生成随机日期
 * @returns 随机的日期
 */
export default function date(format = 'yyyy-MM-dd') {
  return formatDate(timestamp(), format);
}
