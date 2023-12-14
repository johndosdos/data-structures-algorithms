import { describe, test, expect } from "@jest/globals";

import minHeap from "../src/min-heap-fp";

describe("minHeap", () => {
  test("should create a new min heap", () => {
    const heap = minHeap();
    expect(heap).toBeDefined();
  });

  test("should add items to the min heap", () => {
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

    expect(heap.length()).toBe(12);
    expect(heap.heapArray).toEqual([3, 4, 7, 20, 5, 8, 17, 100, 42, 23, 9, 11]);
  });

  test("should remove the minimum item from the min heap", () => {
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

    const removed = heap.remove();
    expect(removed).toBe(3);
    expect(heap.length()).toBe(11);
    expect(heap.heapArray).toEqual([4, 5, 7, 20, 9, 8, 17, 100, 42, 23, 11]);
  });
});
