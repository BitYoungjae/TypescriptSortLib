import { findOne } from './utils.js';

export interface sortableCollection<T> {
  data: T;
  swap: (firstIndex: number, secondIndex: number) => void;
  compare: (firstIndex: number, secondIndex: number, order: order) => boolean;
}

export type order = 'ascending' | 'descending';

export const sort = (collection: sortableCollection<any>, order: order) => {
  const { data: arr } = collection;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      const now = j;
      const next = j + 1;

      if (collection.compare(now, next, order)) collection.swap(now, next);
    }
  }
};

export const lazySort = function*(
  collection: sortableCollection<any>,
  order: order = 'ascending',
): Generator<any> {
  let index = 0;
  const { data: arr } = collection;

  while (index !== arr.length) {
    const foundIndex = findOne(collection, index, order);
    yield arr[foundIndex];

    collection.swap(foundIndex, index);
    index += 1;
  }
};
