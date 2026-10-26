
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || !Number.isFinite(price) || price < 0 ||
            !Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Invalid item details");
        }

        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(coupon) {
        // Accept SAVE20, DISC10, or similar uppercase codes
        const match = /^(SAVE|DISC)(\d{1,2})$/.exec(coupon);

        if (!match) {
            throw new Error("Invalid coupon format");
        }

        const discountPercent = Number(match[2]);

        // Restrict discounts to 1% through 100%
        if (discountPercent < 1 || discountPercent > 100) {
            throw new Error("Coupon discount must be between 1% and 100%");
        }

        const total = this.getTotal();
        const discount = total * discountPercent / 100;

        return {
            subtotal: total,
            coupon: coupon,
            discount: discount,
            finalTotal: total - discount
        };
    }
}

const cart = new Cart();

// Add items to the cart
cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 1000, 2);
cart.addItem("Keyboard", 1500, 1);

console.log("Cart Items:", cart.items);
console.log("Subtotal: ₹" + cart.getTotal());

try {
    const result = cart.applyCoupon("SAVE20");

    console.log("Coupon:", result.coupon);
    console.log("Discount: ₹" + result.discount);
    console.log("Final Total: ₹" + result.finalTotal);
} catch (error) {
    console.log("Coupon Error:", error.message);
}
