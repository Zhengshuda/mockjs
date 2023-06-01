import formatDate from 'src/helper/formatDate';
import timestamp from './timestamp';

/**
 * 生成随机时间
 * @returns 随机的时间
 */
export default function time(format = 'HH:mm:ss') {
  return formatDate(timestamp(), format);
}
