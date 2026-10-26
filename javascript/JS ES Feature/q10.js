
"use strict";

function outer() {
    console.log(count);

    var count = 5;

    // Arrow function has its own local var count
    const inner = () => {
        console.log(count);

        var count = 10;
    };

    inner();
}

outer();

// Closure example
function outerClosure() {
    let value = 5;

    const innerClosure = () => {
        console.log("Closure value:", value);
    };

    innerClosure();
}

outerClosure();

// Debugging: Watch count and value; inspect the Call Stack.
