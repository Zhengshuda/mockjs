import { mock } from "./index";
import Random from "../random";
import { ARRAY_MAX_COUNT, ARRAY_MIN_COUNT } from "../utils/const";

interface arrayOpt {
  count?: number,
  min?: number,
  max?: number,
  raw: Array<any>
}

/**
 * 解析 mock 数组
 * @param opt option
 * @returns result
 */
const _dealArray = function(opt: arrayOpt) {
  // 参数处理
  let finalCount = 1;
  const { min, max, count, raw = [] } = opt;
  let minVal = typeof min !== 'undefined' ? parseInt(min.toString(), 10) : 1;
  if(minVal < ARRAY_MIN_COUNT) minVal = ARRAY_MIN_COUNT;
  let maxVal = typeof max !== 'undefined' ? parseInt(max.toString(), 10) : 1;
  if(maxVal > ARRAY_MAX_COUNT) maxVal = ARRAY_MAX_COUNT;
  finalCount = Random.integer({min: minVal, max: maxVal});

  if (typeof count !== 'undefined') {
    finalCount = parseInt(count.toString(), 10);
  };

  if(raw.length === 0) return [];
  if(finalCount === 1) return genArray(raw);

  // 重复生成数据
  let res: Array<any> = [];
  for (let i = 0; i < finalCount; i++) {
    res = res.concat(genArray(raw));
  }
  return res;
}

const genArray = (raw: Array<any>) => {
  const RowRes: Array<any> = [];
  for(let item of raw) {
    RowRes.push(mock(item));
  }
  return RowRes;
}

export default _dealArray;