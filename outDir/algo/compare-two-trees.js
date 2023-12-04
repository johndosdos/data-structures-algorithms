"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("../tree");
function compare_trees(a, b) {
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
console.log(compare_trees(tree_1.tree, tree_1.tree2));
