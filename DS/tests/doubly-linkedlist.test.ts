import { describe, test, expect } from "@jest/globals";
import { DoublyLinkedList } from "../doulby-linkedlist";

describe("doubly test", () => {
    test("DoublyLinkedList", function () {
        const list = DoublyLinkedList<number>();
        list.add_last(5);
        list.add_last(7);
        list.add_last(9);
        expect(list.length).toEqual(3);

        expect(list.find(2)).toEqual(9);
        expect(list.removeAt(1)).toEqual(7);
        // expect(list.length).toEqual(2);

        list.add_last(11);
        expect(list.removeAt(1)).toEqual(9);
        expect(list.remove(9)).toEqual(undefined);
        expect(list.removeAt(0)).toEqual(5);
        expect(list.removeAt(0)).toEqual(11);
        expect(list.length).toEqual(0);

        list.add_first(5);
        list.add_first(7);
        list.add_first(9);

        expect(list.find(2)).toEqual(5);
        expect(list.find(0)).toEqual(9);
        expect(list.remove(9)).toEqual(9);
        expect(list.length).toEqual(2);
        expect(list.find(0)).toEqual(7);
    });
});
