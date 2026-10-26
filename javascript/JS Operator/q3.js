
let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let power = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Display formatted result using template literals
console.log(`
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value: ${rounded}
Square Root: ${squareRoot}
Power (x^3): ${power}
Random Number (10-50): ${randomNumber}
`);
