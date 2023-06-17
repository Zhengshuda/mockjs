import _ from "lodash";
import logger from "../utils/logger";
import Basic, { registerAttr } from ".";

interface defineOption {
  [key: string]: Function
}
/**
* 注册自定义函数
* @param option 键值对形式，值必须为函数
* @returns void
*/
const define = (option: defineOption): void => {
 if(!_.isPlainObject(option)) {
   throw new Error(`Wrong option!`);
 }
 Object.keys(option).forEach(key => {
   if(Basic[key]) {
     throw new Error(`${key} has already been defined!`);
   }
   if(!_.isFunction(option[key])) {
     throw new Error(`Definition for ${key} is not a funciton!`);
   }
   registerAttr(key, option[key]);
   logger.debug(`${key} function register success!`);
 })
}

export default define;