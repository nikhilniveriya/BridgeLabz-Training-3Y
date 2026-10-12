
const purchaseAmount = 7500;
let discountPercentage = 0;

// Determine discount based on purchase amount
if (purchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (purchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (purchaseAmount >= 2000) {
    discountPercentage = 5;
}

// Calculate discount and final price
const discountAmount = purchaseAmount * discountPercentage / 100;
const finalPrice = Math.round(purchaseAmount - discountAmount);

// Display the result
console.log("Original Total: ₹" + purchaseAmount);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: ₹" + discountAmount);
console.log("Final Price: ₹" + finalPrice);
