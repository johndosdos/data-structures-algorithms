"use strict";
class Stack {
    length;
    head;
    constructor() {
        this.length = 0;
        this.head = undefined;
    }
    push(item) {
        this.length++;
        const node = { value: item, prev: undefined };
        if (!this.head) {
            this.head = node;
            return;
        }
        node.prev = this.head;
        this.head = node;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        const head = this.head;
        this.head = head.prev;
        this.length--;
        return head.value;
    }
    peek() {
        return this.head?.value;
    }
}
const test_stack = new Stack();
console.log(test_stack.push(1));
console.log(test_stack.pop());
console.log(test_stack.pop());
