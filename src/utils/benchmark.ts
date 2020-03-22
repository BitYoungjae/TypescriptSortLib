const repeatFunction = (f: () => void, count = 1000) => {
  for (let i = 0; i < count; i++) {
    f();
  }
};

export const getAvgRunningTime = (f: () => void) => {
  repeatFunction(f);

  const start = Date.now();
  repeatFunction(() => {
    repeatFunction(f, 1000);
  }, 100);
  const end = Date.now();

  return end - start;
};
