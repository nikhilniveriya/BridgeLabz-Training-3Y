
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super("Invalid operation: " + operation);
        this.name = "InvalidOperationError";
    }
}

class CalculationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new CalculationError("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new CalculationError("Cannot find real square root of a negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError(operation);
    }
}

for (const operation of operations) {
    try {
        console.log(`${operation}: ${calculate(operation, num1, num2)}`);
    } catch (error) {
        console.log(`${operation} Error: ${error.message}`);
    }
}

// Test an invalid operation
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`${error.name}: ${error.message}`);
}
