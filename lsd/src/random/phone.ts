import Random from ".";

const phone = function() {
  let res = '1';
  const rangeArr = [3,4,5,7,8];
  const index = Random.integer({ min: 0, max: 4});
  res += rangeArr[index];
  for (let i = 0; i < 9; i++) {
    res += Random.integer({ min: 0, max: 9 });
  }
  return res;
}

export default phone;