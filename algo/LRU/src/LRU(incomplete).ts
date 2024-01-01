type node<T> = {
  value: T;
  previous: node<T> | undefined;
  next: node<T> | undefined;
};

export default function LRUCache<key, value>(capacity: number) {
  let head: node<value>;
  let tail: node<value>;
  let lookup = new Map<key, node<value> | undefined>();

  //private
  function createNode<T>(value: T): node<T> {
    return { value: value, previous: undefined, next: undefined };
  }

  function detachNode(key: key) {
    const node = lookup.get(key);
    if (node?.previous) node.previous.next = node.next;
    if (node?.next) node.next.previous = node?.previous;
    if (node) {
      node.previous = undefined;
      node.next = undefined;
    }

    return node;
  }

  function prepend(node: node<value> | undefined) {
    const current = node;

    if (current) {
      current.next = head;
      head.previous = current;
      head = current;
    }
  }

  function swapValues() {
    if (lookup.has("firstItem" as key) && lookup.has("secondItem" as key)) {
      const value1 = lookup.get("firstItem" as key);
      const value2 = lookup.get("secondItem" as key);

      lookup.set("firstItem" as key, value2);
      lookup.set("secondItem" as key, value1);
    }
  }

  //public
  function get(key: key) {
    if (!lookup.get(key)) return undefined;

    const detachedNode = detachNode(key);
    prepend(detachedNode);
    swapValues();

    return lookup.get(key)?.value;
  }

  function update(key: key, value: value) {
    const newNode = createNode<value>(value);

    if (lookup.size > capacity) {
    }

    if (lookup.size === 0) {
      head = tail = newNode;
    }

    const oldTail = tail;
    tail.next = newNode;
    tail = newNode;
    tail.previous = oldTail;

    lookup.set(key, newNode);

    return lookup;
  }

  return {
    get,
    update,
    lookup,
  };
}

const lru = LRUCache<string, number>(3);
lru.get("firstItem");

lru.update("firstItem", 1);
lru.get("firstItem");

lru.update("secondItem", 2);
lru.get("secondItem");

lru.update("thirdItem", 3);
lru.get("thirdItem");
console.log(lru.lookup);
