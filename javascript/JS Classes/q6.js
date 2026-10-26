
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 40000),
    new Employee(2, "Sara", "HR", 35000),
    new Employee(3, "Kiran", "Finance", 45000),
    new Employee(4, "Ravi", "IT", 50000),
    new Employee(5, "Neha", "Marketing", 38000)
];

// Apply a 10% bonus to each employee's monthly salary
employees.forEach(employee => employee.applyBonus(10));

// Display annual salary for each employee
employees.forEach(employee => {
    console.log(
        `${employee.name} (${employee.department}): ₹${employee.getAnnualSalary()} per year`
    );
});

// Calculate the company's total annual payout
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log("Total Annual Payout: ₹" + totalAnnualPayout);
