import random from './random';
import { extend, customFunc } from './extend';

export default {
    ...random,
    custom: customFunc,
    extend,
};