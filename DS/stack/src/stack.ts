type StackNode<Type> = {
    value: Type;
    prev?: StackNode<Type>;
};

class Stack<Type> {
    public length: number;
    private head?: StackNode<Type>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: Type): void {
        this.length++;

        const node = { value: item, prev: undefined } as StackNode<Type>;

        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): Type | undefined {
        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        this.head = head.prev;

        this.length--;

        return head.value;
    }

    peek(): Type | undefined {
        return this.head?.value;
    }
}

const test_stack = new Stack<number>();
console.log(test_stack.push(1));
console.log(test_stack.pop());
console.log(test_stack.pop());
