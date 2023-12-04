import { describe, test, expect } from "@jest/globals";
import Trie from "../trie-tree";

describe("Trie module", () => {
    test("trie", () => {
        const trie = new Trie();
        trie.Insert("foo");
        trie.Insert("fool");
        trie.Insert("foolish");

        // trie.Insert("bar");

        expect(trie.Find("").sort()).toEqual(["foo", "fool", "foolish"]);
        // expect(trie.Find("fool").sort()).toEqual(["fool"]);

        // trie.Delete("fool");

        // expect(trie.Find("fo").sort()).toEqual(["foo", "foolish"]);
    });
});
