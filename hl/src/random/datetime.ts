import timestamp from './timestamp';
import dayjs from 'dayjs';

/**
 * 生成随机日期与时间
 * @returns 随机的日期与时间
 */
export default function datetime(format = 'YYYY-MM-DD HH:mm:ss') {
  return dayjs(timestamp()).format(format);
}
