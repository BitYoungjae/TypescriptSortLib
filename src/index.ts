import { sort } from './utils/oopSort.js';
import { NumberCollection } from './utils/NumberCollection.js';
import { makeSampleArray } from './utils/util.js';
import { StringCollection } from './utils/StringCollection.js';

const sample = makeSampleArray(100, 1, 1000);

const text = new StringCollection('fjkdsjfals');
const numbers = new NumberCollection(sample);

sort(numbers, 'descending');
sort(text, 'ascending');

console.log(text.data);
console.log(numbers.data);
