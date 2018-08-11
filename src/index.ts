import select from './select';
import query from './query';

import {
  compose,
} from 'ramda';

const data : ReadonlyArray<{}> = [
  {
    name: '1',
    genda: 'male',
  },
  {
    name: '2',
    genda: 'male',
  },
  {
    name: '3',
    genda: 'male',
  },
  {
    name: '4',
    genda: 'male',
  },
  {
    name: '5',
    genda: 'male',
  },
];

const condition = compose(select);

query(condition)(data);

