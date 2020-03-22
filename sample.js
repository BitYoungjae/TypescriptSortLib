import {
  makeSampleArray,
  StringCollection,
  NumberCollection,
  sort,
  lazySort,
} from './build/index.js';

const sample = makeSampleArray(20, 1, 1000);

const text = new StringCollection('lkjhgfdsapoiuytrewqMNBVCXZ');
const numbers = new NumberCollection(sample);

sort(numbers, 'descending');
const lazy = lazySort(numbers, 'ascending');
console.log(numbers.data);
console.log([...lazy]);

sort(text, 'descending');
const lazyText = lazySort(text, 'ascending');
console.log(text.data);
console.log([...lazyText].join(''));
