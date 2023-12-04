type DBNode<T> = {
    value: T;
    prev?: DBNode<T>;
    next?: DBNode<T>;
};

const DoublyLinkedList = function <T>() {
    let length: number = 0;
    let head: DBNode<T> | undefined = undefined;
    let tail: DBNode<T> | undefined = undefined;

    const add_first = function (item: T): void {
        length++;

        const node: DBNode<T> = { value: item };

        if (!head) {
            head = tail = node;
        }

        node.next = head;
        head.prev = node;
        head = node;
    };

    const add_last = function (item: T): void {
        length++;

        const node: DBNode<T> = { value: item };

        if (!tail) {
            tail = head = node;
        }

        node.prev = tail;
        tail.next = node;
        tail = node;
    };

    const add = function (item: T, index: number): void {
        if (index === 0) {
            add_first(item);
        } else if (index === length) {
            add_last(item);
        } else if (index < length) {
            length++;

            const node: DBNode<T> = { value: item };

            let curr = head;

            for (let i = 0; i < index; i++) {
                curr = curr?.next;
            }

            node.next = curr;
            node.prev = curr?.prev;

            if (curr?.prev) {
                curr.prev.next = node;
                curr.prev = node;
            } else {
                throw new Error("Out of range");
            }
        }
    };

    const find = function (index: number): T | undefined {
        if (index >= 0 && index < length) {
            let curr = head;

            for (let i = 0; i < index; i++) {
                curr = curr?.next;
            }

            return curr?.value;
        }

        return undefined;
    };

    const remove = function (index: number): T | undefined {
        if (index === 0) {
            return remove_first();
        } else if (index === length) {
            return remove_last();
        } else if (index > 0 && index < length) {
            let curr = head;

            for (let i = 0; i < index; i++) {
                curr = curr?.next;
            }

            const node = curr;

            if (curr?.prev) {
                curr.prev.next = curr.next;
            } else if (curr?.next) {
                curr.next.prev = curr.prev;
            }

            length--;

            return node?.value;
        }
        return undefined;
    };

    const removeAt = function (index: number): T | undefined {
        return remove(index);
    };

    const remove_first = function (): T | undefined {
        if (!head) {
            return undefined;
        }

        const node = head;
        head = head.next;

        if (head?.prev) {
            head.prev = undefined;
        }

        length--;

        return node.value;
    };

    const remove_last = function (): T | undefined {
        if (!tail) {
            return undefined;
        }

        const node = tail;
        tail = tail.prev;

        if (tail?.next) {
            tail.next = undefined;
        }

        length--;

        return node.value;
    };

    return {
        length,
        add,
        add_first,
        add_last,
        find,
        remove,
        removeAt,
    };
};

module.exports = DoublyLinkedList;
