
const expenses = [5000, 1500, 8000, 2000, 1000];

// Calculate total expenses
let total = 0;

for (const expense of expenses) {
    total += expense;
}

// Calculate average and add 10% tax
const average = total / expenses.length;
const tax = total * 0.10;
total += tax;

// Display the results
console.log("Total Expenses Before Tax: ₹" + (total - tax).toFixed(2));
console.log("Average Expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + tax.toFixed(2));
console.log("Final Amount After Tax: ₹" + total.toFixed(2));
