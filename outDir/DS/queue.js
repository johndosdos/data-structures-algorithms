"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generic implementation of the Queue data structure
function Queue() {
    // Internal function to enqueue an item into the queue
    function enqueue(item) {
        // Increment the queue length
        this.length++;
        // Create a new node with the item value
        const QNode = { value: item, next: null };
        // Check if the queue is empty
        if (!this.tail) {
            // If empty, set both head and tail to the new node
            this.tail = this.head = QNode;
        }
        else {
            // Connect the new node to the existing tail
            this.tail.next = QNode;
            // Update the tail pointer to the new node
            this.tail = QNode;
            // Indicate successful enqueue operation
            return true;
        }
        // Indicate unsuccessful enqueue operation if the queue is full or invalid
        return null;
    }
    // Internal function to dequeue an item from the queue
    function dequeue() {
        // Check if the queue is empty
        if (!this.head) {
            // If empty, return null indicating no item to dequeue
            return null;
        }
        // Store the current head node for later removal
        const head = this.head;
        // Update the head pointer to the next node in the queue
        this.head = this.head.next;
        // If the head pointer becomes null, the queue is empty
        if (!this.head) {
            // Reset the tail pointer as well to indicate an empty queue
            this.tail = null;
        }
        // Decrement the queue length
        this.length--;
        // Return the value of the dequeued node
        return head.value;
    }
    // Internal function to peek at the first item in the queue without removing it
    function peek() {
        // Check if the queue is empty
        if (!this.head) {
            // If empty, return null indicating no item to peek
            return null;
        }
        // Return the value of the first node in the queue
        return this.head.value;
    }
    // Return an object with the queue methods and properties
    return {
        enqueue,
        dequeue,
        peek,
        head: null,
        tail: null,
        length: 0,
    };
}
exports.default = Queue;
// Example usage of the Queue class
const test = Queue();
test.enqueue(1);
test.enqueue(2);
test.enqueue(3);
test.enqueue(4);
console.log(test.peek()); // Output: 1
