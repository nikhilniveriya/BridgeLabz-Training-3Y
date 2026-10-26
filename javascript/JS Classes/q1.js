
"use strict";

// Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    displayDetails() {
        return `${this.name} | Category: ${this.category} | Price: ₹${this.price}`;
    }
}

// Create product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Headphones", 1500, "Electronics"),
    new Product(3, "Book", 500, "Education"),
    new Product(4, "Watch", 2500, "Accessories")
];

// Apply 10% discount to the first product
products[0].applyDiscount(10);

// Display all products
products.forEach(product => console.log(product.displayDetails()));

// Filter products with price greater than 1000
const expensiveProducts = products.filter(product => product.price > 1000);

console.log("\nProducts above ₹1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));
