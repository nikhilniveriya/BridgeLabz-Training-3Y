
const temperature = 12;
const isRaining = false;
const windSpeed = 25;

// Decide the recommended activity
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Example of combining && and || conditions
if ((temperature > 35 || temperature < 15) && !isRaining) {
    console.log("Weather is extreme. Take precautions.");
}
