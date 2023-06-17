import dayjs from "dayjs";
import { DATE_DEFAULT_FOMAT, TIME_DEFAULT_FOMAT } from "../utils/date_const";

/**
 * 生成随机Date
 * @returns date
 */
const randomDate = () => {
  const min = new Date(0);
  const max = new Date();
  return new Date(Math.random() * (max.getTime() - min.getTime()));
};

interface formatOpt {
  format?: string
}
/**
 * 生成随机日期
 * @param formatStr 日期格式，参考dayjs官网，默认格式 YYYY-MM-DD
 * @returns 日期
 */
const date = (opt: formatOpt) => {
  const { format = DATE_DEFAULT_FOMAT } = opt;
  const curDate = randomDate();
  return dayjs(curDate).format(format);
};

/**
 * 生成随机时间
 * @param formatStr 时间格式，参考dayjs官网，默认格式 HH:mm:ss
 * @returns 时间
 */
const time = (opt: formatOpt) => {
  const { format = TIME_DEFAULT_FOMAT } = opt;
  const curDate = randomDate();
  return dayjs(curDate).format(format);
};

export {
  date,
  time
}