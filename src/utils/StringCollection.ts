import { sortableCollection, order } from './types';

export class StringCollection implements sortableCollection<string> {
  data: string;

  swap(firstIndex: number, secondIndex: number): void {
    const arr = [...this.data];
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    this.data = arr.join('');
  }

  compare(firstIndex: number, secondIndex: number, order: order): boolean {
    const first = this.data[firstIndex].toLowerCase();
    const second = this.data[secondIndex].toLowerCase();

    return order === 'ascending' ? first > second : first < second;
  }

  constructor(data: string) {
    this.data = data;
  }
}
