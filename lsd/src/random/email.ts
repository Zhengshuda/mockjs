import Random from ".";

const email = function() {
  return `${Random.string({min: 3, max: 10})}@${Random.string({min: 3, max: 6})}.com`;
}

export default email;