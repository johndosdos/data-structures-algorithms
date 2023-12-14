type minHeap = {
  add: (nodeValue: number) => void;
  remove: () => number | undefined;
  length: () => number;
  heapArray: number[];
};

export default function minHeap(): minHeap {
  let heapArray: number[] = [];

  function swap(a: number, b: number): void {
    const temp = heapArray[a];
    heapArray[a] = heapArray[b];
    heapArray[b] = temp;
  }

  function bubbleUp(parent: number, child: number): void {
    let currentParent = parent;
    let currentChild = child;

    while (heapArray[currentParent] > heapArray[currentChild]) {
      swap(currentParent, currentChild);

      currentChild = currentParent;
      currentParent = Math.floor((currentChild - 1) / 2);
    }
  }

  function sinkDown(head: number): void {
    let current = head;
    let leftChild = 2 * current + 1;
    let rightChild = 2 * current + 2;

    let min =
      heapArray[leftChild] < heapArray[rightChild] ? leftChild : rightChild;

    while (heapArray[current] > heapArray[min]) {
      swap(current, min);
      current = min;
      leftChild = 2 * current + 1;
      rightChild = 2 * current + 2;

      min =
        heapArray[leftChild] < heapArray[rightChild] ? leftChild : rightChild;
    }
  }

  function add(nodeValue: number): void {
    const currentValue = nodeValue;
    if (heapArray) heapArray.push(currentValue);

    const child = heapArray.indexOf(currentValue);
    const parent = Math.floor((child - 1) / 2);

    bubbleUp(parent, child);
  }

  function remove(): number | undefined {
    const head: number = 0;
    const tail = heapArray.length - 1;

    swap(head, tail);
    const removed = heapArray.pop();
    sinkDown(head);

    return removed;
  }

  function length(): number {
    return heapArray.length;
  }

  return { add, remove, length, heapArray };
}

function main() {
  const heap = minHeap();
  heap.add(23);
  heap.add(5);
  heap.add(7);
  heap.add(42);
  heap.add(4);
  heap.add(11);
  heap.add(17);
  heap.add(100);
  heap.add(20);
  heap.add(3);
  heap.add(9);
  heap.add(8);

  console.log(heap.heapArray);
}

main();
