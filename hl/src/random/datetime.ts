import formatDate from 'src/helper/formatDate';
import timestamp from './timestamp';

/**
 * 生成随机日期与时间
 * @returns 随机的日期与时间
 */
export default function datetime(format = 'yyyy-MM-dd HH:mm:ss') {
  return formatDate(timestamp(), format);
}
