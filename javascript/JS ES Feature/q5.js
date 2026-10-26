
"use strict";

// Corrected code: declare variables before using them
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}

function startGame() {
    console.log(status);
}

console.log(score);
announce();
startGame();

// Arrow function comparison
const announceArrow = () => {
    console.log("Game started using arrow function");
};

announceArrow();
