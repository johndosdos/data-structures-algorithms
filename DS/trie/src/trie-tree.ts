type trieNode = {
    Child: Map<string, trieNode>;
    isEnd?: boolean;
};

export default class Trie {
    #root: trieNode;
    #returnList: string[];

    constructor() {
        this.#root = { Child: new Map(), isEnd: false };
        this.#returnList = [];
    }

    #createNewNode(): trieNode {
        return { Child: new Map(), isEnd: false };
    }

    #trieDFS(
        currentNode: trieNode,
        collectedWords: string[] = [],
        currentWord: string = ""
    ): string[] {
        if (currentNode.isEnd) {
            collectedWords.push(currentWord);
        }

        for (const [char, nextNode] of currentNode.Child.entries()) {
            const nextWord = currentWord + char;

            this.#trieDFS(nextNode, collectedWords, nextWord);
        }

        return collectedWords;
    }

    public Insert(word: string) {
        let currentNode = this.#root;

        if (word === "") return "Empty string not allowed for insertion";

        for (const char of word) {
            if (!currentNode.Child.has(char)) {
                currentNode.Child.set(char, this.#createNewNode());
            }
            const nextNode = currentNode.Child.get(char);

            if (nextNode) currentNode = nextNode;
        }

        currentNode.isEnd = true;
    }
    public Delete(word: string) {
        let currentNode = this.#root;

        if (word === "") return "Empty string not allowed for deletion";

        for (const char of word) {
            if (currentNode.Child.has(char)) {
                const nextNode = currentNode.Child.get(char);
                if (nextNode) currentNode = nextNode;
            }
        }

        currentNode.isEnd = false;
    }

    public Find(word: string): string[] {
        let currentNode = this.#root;

        if (word === "")
            throw new Error("Empty string now allowed for searching");

        for (const char of word) {
            if (currentNode.Child.has(char)) {
                const nextNode = currentNode.Child.get(char);
                if (nextNode) currentNode = nextNode;
            }
        }

        if (currentNode.isEnd) return [word];

        return this.#trieDFS(currentNode, [], word);
    }
}
