import { swap } from '../utils.js';

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
