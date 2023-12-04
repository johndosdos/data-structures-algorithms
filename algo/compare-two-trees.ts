import { tree, tree2 } from "../tree";

function compare_trees<T>(
    a: BinaryNode<T> | null | undefined,
    b: BinaryNode<T> | null | undefined
): boolean {
    //base cases
    if (a === null && b === null) {
        return true;
    }

    if (a === null || b === null) {
        return false;
    }

    if (a?.value !== b?.value) {
        return false;
    }

    return compare_trees(a?.left, b?.left) && compare_trees(a?.right, b?.right);
}

console.log(compare_trees<number>(tree, tree2));
