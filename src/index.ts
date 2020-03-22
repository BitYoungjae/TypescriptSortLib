import { sort, lazySort } from './utils/sort.js';
import { NumberCollection } from './utils/collections/NumberCollection.js';
import { makeSampleArray } from './utils/utils.js';
import { StringCollection } from './utils/collections/StringCollection.js';

const sample = makeSampleArray(20, 1, 1000);

const text = new StringCollection('lkjhgfdsapoiuytrewqmnbvcxz');
const numbers = new NumberCollection(sample);

sort(numbers, 'descending');
const lazy = lazySort(numbers, 'ascending');
console.log(numbers.data);
console.log([...lazy]);

sort(text, 'descending');
const lazyText = lazySort(text, 'ascending');
console.log(text.data);
console.log([...lazyText].join(''));
