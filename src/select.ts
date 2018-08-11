import {
  pick,
  map
} from 'ramda';

const select = (props: ReadonlyArray<string>) => map(pick(props));

export default select;