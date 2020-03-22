import { swap, findMax } from '../utils.js';

export const bubbleSort = (arr: number[]): number[] => {
  const coppied = [...arr];

  for (let i = 0; i < coppied.length; i++) {
    for (let j = 0; j < coppied.length - i; j++) {
      const now = coppied[j];
      const next = coppied[j - 1];

      if (!next) continue;

      if (now < next) swap(coppied, j, j - 1);
    }
  }

  return coppied;
};

export const lazySort = function*(arr: number[]): Generator<number> {
  let index = 0;
  const coppied = [...arr];

  while (index !== coppied.length) {
    const { max, maxIndex } = findMax(coppied, index);
    yield max;

    swap(coppied, index, maxIndex);
    index += 1;
  }
};
