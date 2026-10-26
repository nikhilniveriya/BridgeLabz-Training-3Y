
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
    try {
        const transaction = transactions[index];

        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id == null || transaction.amount == null) {
            throw new Error("MISSING_FIELD");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log("Valid transaction:", transaction.id);
    } catch (error) {
        const entry = {
            line: index + 1,
            type: error.message
        };

        invalid.push(entry);
        console.log(`Line ${index + 1} Error: ${error.message}`);
    }
}

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);
console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);
