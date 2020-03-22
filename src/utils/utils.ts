import { sortableCollection, order } from './sort';

export const swap = (arr: number[], first: number, second: number): void => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

export const findOne = (
  collection: sortableCollection<any>,
  from = 0,
  order: order = 'ascending',
): number => {
  const { data: arr } = collection;
  let index = from;

  for (let i = from; i < arr.length; i++) {
    if (collection.compare(from, i, order)) {
      index = i;
    }
  }

  return index;
};

export const makeRandomNum = (min = 0, max = 100): number => {
  const randomNum = min + Math.floor(Math.random() * (max - min));
  return randomNum;
};

export const makeSampleArray = (length = 10, min = 0, max = 100): number[] => {
  const list: number[] = Array(length)
    .fill(null)
    .map(() => makeRandomNum(min, max));

  return list;
};
