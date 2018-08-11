import {
  transduce,
} from 'ramda';
import append from './append';

const query = (condition) => (table) => transduce(condition, append, [], table);

export default query;
