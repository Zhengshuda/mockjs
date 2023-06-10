import { mock } from "./index";
import Random from "../random";
import { ARRAY_DEFAULT_COUNT, ARRAY_MAX_COUNT, ARRAY_MIN_COUNT } from "../utils/const";

interface arrayOpt {
  count?: number,
  min?: number,
  max?: number,
  raw: Array<any>
}

function getArrayCount(opt: arrayOpt) {
  const { min = ARRAY_MIN_COUNT, max = ARRAY_MAX_COUNT, count = ARRAY_DEFAULT_COUNT } = opt;

  let countVal = parseInt(count.toString(), 10);
  if(countVal < ARRAY_MIN_COUNT || countVal > ARRAY_MAX_COUNT) {
    countVal = ARRAY_DEFAULT_COUNT;
    console.error(`count值无效，使用默认值${ARRAY_DEFAULT_COUNT}`);
  }
  if(typeof opt.min === 'undefined' && typeof opt.max === 'undefined') {
    return countVal;
  }

  let minVal = parseInt(min.toString(), 10);
  if(minVal < ARRAY_MIN_COUNT) {
    minVal = ARRAY_DEFAULT_COUNT;
    console.error(`最小值小于限制${ARRAY_MIN_COUNT}, 使用默认值${ARRAY_MIN_COUNT}`);
  }

  let maxVal = parseInt(max.toString(), 10);
  if(maxVal > ARRAY_MAX_COUNT) {
    maxVal = ARRAY_MAX_COUNT;
    console.error(`最大值大于限制${ARRAY_MAX_COUNT}, 使用默认值${ARRAY_MAX_COUNT}`);
  }
  if(maxVal < minVal) {
    minVal = ARRAY_MIN_COUNT;
    maxVal = ARRAY_MAX_COUNT;
    console.error('传入的参数非法：min 大于 max，使用默认值');
  }
  return Random.integer({
    min: minVal,
    max: maxVal
  });
}

/**
 * 解析 mock 数组
 * @param opt option
 * @returns result
 */
const _dealArray = function(opt: arrayOpt) {
  // 参数处理
  const { raw = [] } = opt;
  if(raw.length === 0) return [];
  
  const finalCount = getArrayCount(opt);
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