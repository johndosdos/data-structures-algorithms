"use strict";
function fizzbuzz(n) {
    let out = "";
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0)
            out += "fizzbuzz";
        else if (i % 3 === 0)
            out += "fizz";
        else if (i % 5 === 0)
            out += "buzz";
        else
            out += i;
        out += "  ";
    }
    console.log(out);
}
fizzbuzz(15);
