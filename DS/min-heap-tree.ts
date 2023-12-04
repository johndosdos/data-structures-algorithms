/* interface Heap {
    insert(value: number): number[];
    delete(): number;
    length: number;
    data: number[];
}

type Child_Node = {
    index: number;
    value: number;
};

function Min_Heap_Tree(): Heap {
    function insert(this: Heap, value: number): number[] {
        if (!value) {
            throw new Error("No input provided");
        }

        this.data.push(value);

        Bubble_up.call(this);

        return this.data;
    }

    function delete(this: Heap): number {
        if (this.length === 0) {
            throw new Error("Tree is empty");
        }

        const deleted_value = Sink_down.call(this);

        this.data.pop();

        return deleted_value;
    }

    function Get_parent_index(child_index: number): number {
        return Math.floor((child_index - 1) / 2);
    }

    function Child_left_value(this: Heap, parent_index: number): number {
        const out = 2 * parent_index + 1;
        return this.data[out];
    }

    function Child_right_value(this: Heap, parent_index: number): number {
        const out = 2 * parent_index + 2;
        return this.data[out];
    }

    function Bubble_up(this: Heap): void {
        let current_index: number = this.data.length - 1;
        let parent_index: number = Get_parent_index(current_index);

        while (this.data[current_index] <= this.data[parent_index]) {
            Swap.call(this, parent_index, current_index);

            current_index = parent_index;
            parent_index = Get_parent_index(current_index);
        }
    }

    function Sink_down(this: Heap): number {
        let min_value: number = 0;
        let min_value_index: number = 0;

        let current_index: number = 0;
        const last_value_index: number = this.length - 1;

        const deleted_value: number = this.data[current_index];

        this.data[current_index] = 0;

        Swap.call(this, current_index, last_value_index);

        while (
            this.data[current_index] >
                Child_left_value.call(this, current_index) ||
            this.data[current_index] >
                Child_right_value.call(this, current_index)
        ) {
            min_value = Math.min(
                Child_left_value.call(this, current_index),
                Child_right_value.call(this, current_index)
            );

            if (!min_value) {
                break;
            }

            min_value_index = this.data.indexOf(min_value);

            Swap.call(this, current_index, min_value_index);

            current_index = min_value_index;
        }

        return deleted_value;
    }

    function Swap(this: Heap, index_1: number, index_2: number): void {
        const temp = this.data[index_1];
        this.data[index_1] = this.data[index_2];
        this.data[index_2] = temp;
    }

    return {
        insert,
        delete,
        data: [],
        get length() {
            return this.data.length;
        },
    };
}

const heap = Min_Heap_Tree(); */

class MinHeap {
    public data: number[];

    // Constructor initializes an empty array for the heap data.
    constructor() {
        this.data = [];
    }

    // Getter for the length of the heap.
    public get length(): number {
        return this.data.length;
    }

    // Insert a new value into the heap.
    public insert(value: number): number[] {
        // Check if the provided value is valid.
        if (value === undefined || value === null) {
            throw new Error("Cannot proceed. No provided input.");
        }

        // Add the value to the end of the heap.
        this.data.push(value);

        // Ensure the heap property is maintained by bubbling up the newly added value.
        this.#bubbleUp();

        // Return the updated heap array.
        return this.data;
    }

    // Delete the root (min value) from the heap.
    public delete(): number | undefined {
        // Check if the heap is empty.
        if (this.length === 0) {
            throw new Error("Cannot proceed. Tree is empty.");
        }

        // Indices for the root and the last element in the heap.
        const currentIndex = 0;
        const lastIndex = this.length - 1;

        // Store the min value (root) to be returned later.
        const deletedValue = this.data[0];

        // Swap the root with the last element in the heap.
        this.#swap(currentIndex, lastIndex);

        // Remove the last element (previously the root) from the heap.
        this.data.pop();

        // Ensure the heap property is maintained by sinking down the swapped element.
        this.#sinkDown(currentIndex);

        // Return the deleted value.
        return deletedValue;
    }

    // Private method for bubbling up a newly added value to maintain the heap property.
    #bubbleUp(): void {
        let currentIndex = this.length - 1;
        let parentIndex = this.#getParentIndex(currentIndex);

        // Continue swapping with the parent until the heap property is satisfied.
        while (this.data[currentIndex] <= this.data[parentIndex]) {
            // If we reach the root, break the loop.
            if (!currentIndex) {
                break;
            }

            // Swap the current element with its parent.
            this.#swap(currentIndex, parentIndex);

            // Update indices for the next iteration.
            currentIndex = parentIndex;
            parentIndex = this.#getParentIndex(currentIndex);
        }
    }

    // Private method for sinking down an element to maintain the heap property.
    #sinkDown(parentIndex: number): void {
        // Continue swapping with the smaller child until the heap property is satisfied.
        while (
            this.data[parentIndex] > this.#getChildLeftValue(parentIndex) ||
            this.data[parentIndex] > this.#getChildRightValue(parentIndex)
        ) {
            // Find the index of the smaller child.
            const minValue = Math.min(
                this.#getChildLeftValue(parentIndex),
                this.#getChildRightValue(parentIndex)
            );

            // If there is no smaller child, break the loop.
            if (!minValue) {
                break;
            }

            // Swap the parent with the smaller child.
            const minValueIndex = this.data.indexOf(minValue);
            this.#swap(parentIndex, minValueIndex);

            // Update the parent index for the next iteration.
            parentIndex = minValueIndex;
        }
    }

    // Private method for swapping two elements in the heap.
    #swap(index1: number, index2: number): void {
        const temp = this.data[index1];
        this.data[index1] = this.data[index2];
        this.data[index2] = temp;
    }

    // Private method to get the index of the parent of a given child index.
    #getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    // Private method to get the value of the left child of a given parent index.
    #getChildLeftValue(parentIndex: number): number {
        const index = 2 * parentIndex + 1;
        return this.data[index];
    }

    // Private method to get the value of the right child of a given parent index.
    #getChildRightValue(parentIndex: number): number {
        const index = 2 * parentIndex + 2;
        return this.data[index];
    }
}

// Example usage:
const heap = new MinHeap();

//tests
heap.insert(5);
heap.insert(3);
heap.insert(69);
heap.insert(420);
heap.insert(4);
heap.insert(1);
heap.insert(8);
heap.insert(7);

heap.length;
heap.delete();
heap.delete();
console.log(heap.delete());
heap.delete();
heap.length;
heap.delete();
heap.delete();
heap.delete();
heap.delete();
heap.length;
