import { sort } from './utils/sort.js';
import { NumberCollection } from './utils/collections/NumberCollection.js';
import { makeSampleArray } from './utils/utils.js';
import { StringCollection } from './utils/collections/StringCollection.js';

const sample = makeSampleArray(100, 1, 1000);

const text = new StringCollection('fjkdsjfals');
const numbers = new NumberCollection(sample);

sort(numbers, 'descending');
sort(text, 'ascending');

console.log(text.data);
console.log(numbers.data);
