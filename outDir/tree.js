"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tree2 = exports.tree = void 0;
exports.tree = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
            right: null,
            left: null,
        },
        left: {
            value: 30,
            right: {
                value: 45,
                right: null,
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: null,
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        },
    },
};
exports.tree2 = {
    value: 20,
    right: {
        value: 50,
        right: null,
        left: {
            value: 30,
            right: {
                value: 45,
                right: {
                    value: 49,
                    left: null,
                    right: null,
                },
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: {
                    value: 21,
                    right: null,
                    left: null,
                },
            },
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        },
    },
};
