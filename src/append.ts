import {
  flip,
  append as rappend,
} from 'ramda';

interface Append<T> {
  (acc: T[], val: T) : ReadonlyArray<T>
}

const append: Append = flip(rappend);

export default append;