"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Trie {
    #root;
    #returnList;
    constructor() {
        this.#root = { Child: new Map(), isEnd: false };
        this.#returnList = [];
    }
    get #createNewNode() {
        return { Child: new Map(), isEnd: false };
    }
    #trieDFS(node, collectedWords = [], currentWord = "") {
        let currentNode = node;
        if (currentNode.isEnd) {
            collectedWords.push(currentWord);
        }
        for (const char of currentNode.Child) {
        }
    }
    Insert(word) {
        let currentNode = this.#root;
        let char = "";
        if (word === "")
            throw new Error("Cannot insert an empty word");
        //e.g. word = foo
        for (char of word) {
            const nextNode = currentNode.Child.get(char);
            if (!currentNode.Child.has(char)) {
                currentNode.Child.set(char, this.#createNewNode);
            }
            if (nextNode) {
                currentNode = nextNode;
            }
        }
        currentNode.isEnd = true;
        console.log(char, currentNode);
    }
    Delete(word) {
        //delete the word "foo"
    }
    Find(prefix) {
        //list the words that start with "fo"
        let currentNode = this.#root;
        console.log(currentNode);
        this.#trieDFS(currentNode, [], prefix);
    }
}
exports.default = Trie;
