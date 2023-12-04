import Queue from "../DS/queue";

type BinaryNode<T> = {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
};

// Assuming 'Queue' is properly implemented and available

// Breadth-First Search (BFS) function to check if a value (needle) is present in a binary tree
function bfs(head: BinaryNode<number>, needle: number): boolean {
    // Create a queue to perform BFS
    const myQueue = Queue<BinaryNode<number>>();

    // Enqueue the root node to start BFS
    myQueue.enqueue(head);

    // Continue BFS until the queue is not empty
    while (myQueue.length) {
        // Dequeue the front node from the queue
        const node = myQueue.dequeue();

        // If the node is null, skip to the next iteration
        if (!node) {
            return false;
        }

        // Check if the value of the current node is equal to the needle
        if (node.value === needle) {
            // If yes, we found the needle in the binary tree
            return true;
        }

        // Enqueue the left child if it exists
        if (node.left) {
            myQueue.enqueue(node.left);
        }

        // Enqueue the right child if it exists
        if (node.right) {
            myQueue.enqueue(node.right);
        }
    }

    // If the needle is not found after exploring all nodes, return false
    return false;
}

// Example Usage:
// const binaryTree = ...; // Initialize your binary tree
// const needleValue = ...; // The value you want to find in the binary tree

// const result = bfs(binaryTree, needleValue);
// console.log(result);
