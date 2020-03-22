export const swap = (arr: number[], first: number, second: number): void => {
  const temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

export const findMax = (arr: number[], from = 0) => {
  let max = arr[from];
  let maxIndex = from;

  for (let i = from + 1; i < arr.length; i++) {
    const now = arr[i];

    if (max < now) {
      max = now;
      maxIndex = i;
    }
  }

  return { max, maxIndex };
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
