import {
  makeSampleArray,
  StringCollection,
  NumberCollection,
  sort,
  lazySort,
  LinkedList,
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

const linked = new LinkedList();
linked.add('b');
linked.add('a');
linked.add('d');
linked.add('c');
linked.add('e');

const lazyLinked = lazySort(linked, 'ascending');
console.log([...lazyLinked]);

sort(linked, 'descending');
console.log(Array.from(linked.data));
