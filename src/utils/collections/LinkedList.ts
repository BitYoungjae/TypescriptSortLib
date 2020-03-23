import { order, sortableCollection } from '../sort';

interface ListNode {
  value: any;
  next?: ListNode;
}

export class LinkedList implements sortableCollection<LinkedList> {
  head: ListNode | null = null;
  data: LinkedList;

  constructor() {
    const isNumber = (prop: string | symbol | number): boolean =>
      typeof prop === 'string' && /^[0-9]+$/.test(prop);

    this.data = new Proxy(this, {
      get(target, prop, reciever) {
        if (isNumber(prop)) {
          const data = target.at(Number(prop));
          return data && data.value;
        }

        if (Reflect.has(target, prop))
          return Reflect.get(target, prop, reciever);
      },
      set(target, prop, value, reciever): boolean {
        if (isNumber(prop)) {
          const result = target.set(Number(prop), value);
          if (result) return true;
          return false;
        }

        return Reflect.set(target, prop, value, reciever);
      },
    });
  }

  static getTail(head: ListNode): ListNode {
    const { next } = head;
    if (!next) return head;

    return this.getTail(next);
  }

  add(value: any) {
    if (!this.head) {
      this.head = { value };
      return;
    }

    const tail = LinkedList.getTail(this.head);
    tail.next = {
      value,
    };
  }

  at(index: number) {
    if (!this.head) return null;

    let leftIndex = index;
    let head = this.head;

    while (leftIndex--) {
      if (!head.next) return null;
      head = head.next;
    }

    return head;
  }

  set(index: number, value: any): boolean {
    const targetNode = this.at(index);
    if (!targetNode) return false;

    targetNode.value = value;
    return true;
  }

  get length(): number {
    if (!this.head) return 0;

    let len = 1;
    let now = this.head;
    while (now.next) {
      now = now.next;
      len++;
    }
    return len;
  }

  set length(len: number) {
    const lastNode = this.at(len - 1);
    if (!lastNode) return;

    delete lastNode.next;
  }

  compare(firstIndex: number, secondIndex: number, order: order): boolean {
    const first = this.at(firstIndex);
    const second = this.at(secondIndex);

    if (!first || !second) return false;

    return order === 'ascending'
      ? first.value > second.value
      : first.value < second.value;
  }

  swap(firstIndex: number, secondIndex: number): void {
    const first = this.at(firstIndex);
    const second = this.at(secondIndex);

    if (!first || !second) return;

    const temp = first.value;
    first.value = second.value;
    second.value = temp;
  }

  push(value: any): number {
    this.add(value);
    return this.length;
  }

  pop(): any {
    if (!this.head) return undefined;
    const { value: result } = LinkedList.getTail(this.head);
    const prev = this.at(this.length - 2);
    prev && delete prev.next;

    return result;
  }

  unshift(value: any): number {
    const node: ListNode = {
      value,
      next: this.head || undefined,
    };

    this.head = node;
    return this.length;
  }

  shift(value: any): any {
    if (!this.head) return undefined;
    const { value: result, next } = this.head;
    this.head = next || null;

    return result;
  }

  static from(iter: Iterable<any>): LinkedList {
    const list = new LinkedList();
    for (const one of iter) {
      list.add(one);
    }

    return list;
  }

  toArray(): any[] {
    return Array.from(this.data);
  }
}
