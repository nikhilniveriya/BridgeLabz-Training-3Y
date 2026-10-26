
let bonus = 5000; // Global variable

function calculateSalary(isPermanent) {
    let salary = 40000; // Local variable

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log("Total Salary:", salary);
    console.log("Global Bonus:", bonus);

    // Change global variable using reassignment
    bonus = 6000;
    console.log("Updated Global Bonus:", bonus);
}

calculateSalary(true);
calculateSalary(false);
