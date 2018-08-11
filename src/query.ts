import {
  transduce,
} from 'ramda';
import append from './append';

interface transducer {
  
}

const query = (condition: transducer) => (table: ReadonlyArray<{}>) => transduce(condition, append, [], table);

export default query;
