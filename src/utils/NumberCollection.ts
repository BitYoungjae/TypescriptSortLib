import { sortableCollection, order } from './types';

export class NumberCollection implements sortableCollection<number[]> {
  public data: number[];

  swap(firstIndex: number, secondIndex: number): void {
    const temp = this.data[firstIndex];
    this.data[firstIndex] = this.data[secondIndex];
    this.data[secondIndex] = temp;
  }

  compare(firstIndex: number, secondIndex: number, order: order): boolean {
    const first = this.data[firstIndex];
    const second = this.data[secondIndex];

    return order === 'ascending' ? first > second : first < second;
  }

  constructor(data: number[]) {
    this.data = data;
  }
}
