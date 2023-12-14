import { describe, test, expect } from "@jest/globals";
import Trie from "../../trie/src/trie-tree";

describe("Trie module", () => {
  test("trie", () => {
    const trie = new Trie();
    trie.Insert("foo");
    trie.Insert("fool");
    trie.Insert("foolish");
    trie.Insert("food");
    trie.Insert("zebra");

    expect(trie.Find("f").sort()).toEqual(["foo", "food", "fool", "foolish"]);
    expect(trie.Find("z")).toEqual(["zebra"]);

    expect(trie.Find("fool").sort()).toEqual(["fool"]);

    trie.Insert("bar");
    expect(trie.Find("b")).toEqual(["bar"]);

    trie.Delete("fool");

    expect(trie.Find("fo").sort()).toEqual(["foo", "food", "foolish"]);
  });
});
