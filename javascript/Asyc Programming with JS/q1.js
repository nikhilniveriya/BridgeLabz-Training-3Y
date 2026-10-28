
function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                console.log("Water boiled!");
                resolve();
            } else {
                reject(new Error("Failed to boil water."));
            }
        }, 1500);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                console.log("Coffee brewed!");
                resolve();
            } else {
                reject(new Error("Failed to brew coffee."));
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.9) {
                console.log("Coffee poured into the cup!");
                resolve();
            } else {
                reject(new Error("Failed to pour coffee."));
            }
        }, 1500);
    });
}


boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.error("Coffee process failed:", error.message);
    });
