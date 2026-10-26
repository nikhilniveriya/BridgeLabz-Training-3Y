
"use strict";

function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const numbers = [1, 2, 3, 4];

// Double each number
const doubled = applyOperation(numbers, num => num * 2);
console.log("Doubled:", doubled);

// Square each number
const squared = applyOperation(numbers, num => num * num);
console.log("Squared:", squared);
