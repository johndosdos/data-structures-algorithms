"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const trie_tree_1 = __importDefault(require("../trie-tree"));
(0, globals_1.describe)("Trie module", () => {
    (0, globals_1.test)("trie", () => {
        const trie = new trie_tree_1.default();
        trie.Insert("foo");
        // trie.Insert("fool");
        // trie.Insert("foolish");
        trie.Find("fo");
        // trie.Insert("bar");
        // expect(trie.Find("fo").sort()).toEqual(["foo", "fool", "foolish"]);
        // expect(trie.Find("foo").sort()).toEqual(["foo"]);
        // trie.Delete("fool");
        // expect(trie.Find("fo").sort()).toEqual(["foo", "foolish"]);
    });
});
