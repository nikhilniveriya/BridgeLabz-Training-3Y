
"use strict";

const apiData = [
    "25", "true", "false", "NaN", " ",
    "100px", "3.14", null, undefined
];

const validNumbers = [];
const invalidNumbers = [];

// Convert each value into Number, Boolean and String forms
for (const value of apiData) {
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log("\nOriginal:", stringValue);
    console.log("Number:", numberValue);
    console.log("Boolean:", booleanValue);
    console.log("String:", stringValue);

    // Number("") and Number(" ") are 0, so reject blank strings explicitly.
    const isBlank = typeof value === "string" && value.trim() === "";

    if (Number.isNaN(numberValue) || isBlank) {
        invalidNumbers.push(value);
        console.log("Status: Invalid numeric data");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: Valid numeric data");
    }
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);
console.log("Valid Count:", validNumbers.length);
console.log("Invalid Count:", invalidNumbers.length);
