import _ from 'lodash';
import {
  integer,
  string,
  boolean,
  date,
  time,
} from './basic';
import phone from './phone';

interface RandomInterface {
  [key: string]: Function,
};

const Random: RandomInterface = {
  integer,
  string,
  boolean,
  date,
  time,
  phone
};

export default Random;
