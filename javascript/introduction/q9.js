
const num1 = Math.floor(Math.random() * 20) + 1;
const num2 = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const operator = operators[randomIndex];

let answer;

// Calculate answer using switch
switch (operator) {
    case "+":
        answer = num1 + num2;
        break;

    case "-":
        answer = num1 - num2;
        break;

    case "*":
        answer = num1 * num2;
        break;

    case "/":
        answer = num1 / num2;
        break;
}

// Display question and answer
console.log(`Question: ${num1} ${operator} ${num2} = ?`);

if (operator === "/") {
    console.log("Correct Answer:", answer.toFixed(2));
} else {
    console.log("Correct Answer:", answer);
}
