
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate original cart total
let total = cart.reduce((sum, product) => sum + product.price, 0);

let discountedTotal = 0;

// Apply category-wise discounts
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    let finalPrice = product.price * (1 - discount);
    discountedTotal += finalPrice;

    console.log(
        `${product.item}: Original ₹${product.price}, Final ₹${finalPrice}`
    );
}

// Apply extra discount if original cart total exceeds ₹50,000
if (total > 50000) {
    discountedTotal *= 0.95;
}

console.log("Original Cart Total:", total);
console.log("Final Cart Total:", discountedTotal.toFixed(2));
