"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tree_1 = require("../tree");
function search(curr, needle) {
    if (curr === null) {
        return false;
    }
    if (curr.value === needle) {
        return true;
    }
    if (curr.value <= needle) {
        return search(curr.right, needle);
    }
    return search(curr.left, needle);
}
function dfs(head, needle) {
    return search(head, needle);
}
dfs(tree_1.tree, 45);
