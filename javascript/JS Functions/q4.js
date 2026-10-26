
"use strict";

// Constructor function
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Shared prototype method
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

// Create two car objects
const car1 = new Car("Toyota", "Fortuner");
const car2 = new Car("Hyundai", "Creta");

// Call shared method
car1.getDetails();
car2.getDetails();

// Both objects share the same prototype method
console.log(car1.getDetails === car2.getDetails);
