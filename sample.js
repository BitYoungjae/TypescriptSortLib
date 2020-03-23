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
console.log(Array.from(linked));
console.log(linked.toArray());

// (Array-like features)
linked.unshift('unshift 1');
linked.unshift('unsfhit 2');
linked.unshift('unshift 3');
linked.shift();
linked.push('push 1');
linked.push('push 2');
linked.pop();

console.log(Array.from(linked.toArray()));

const newList = LinkedList.from([1, 2, 3, 4]);
newList.set(2, 99); // replace value of index 2 with 99
newList.length = 3; // (Array-like) delete rest nodes using length property
newList[0] = 3; // (Array-like) update node using [] syntax
console.log(newList.toArray());
