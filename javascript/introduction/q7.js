
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 25; // Change this test value to try again

console.log("Secret Number:", secretNumber);
console.log("Your Guess:", userGuess);

// Check the guess using nested if conditions
if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}
