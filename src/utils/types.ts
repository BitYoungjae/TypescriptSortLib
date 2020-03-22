export interface sortableCollection<T> {
  data: T;
  swap: (firstIndex: number, secondIndex: number) => void;
  compare: (firstIndex: number, secondIndex: number, order: order) => boolean;
}

export type order = 'ascending' | 'descending';
