import {
  flip,
  append as append,
} from 'ramda';

interface Append<T> {
  (acc: T[], val: T) : ReadonlyArray<T>
}

const tqlAppend: Append<{}> = flip<{}, ReadonlyArray<{}> ,ReadonlyArray<{}>>(append);

export default tqlAppend;