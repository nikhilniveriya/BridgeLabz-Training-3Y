
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
    try {
        // Validate required properties
        if (
            !employee ||
            employee.name == null ||
            employee.salary == null ||
            employee.years == null
        ) {
            throw new Error("Missing employee property");
        }

        // Convert strings into numbers
        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid numeric conversion");
        }

        // Calculate bonus based on experience
        const bonus = salary * (years > 3 ? 0.10 : 0.05);
        const totalSalary = salary + bonus;

        console.log(`
Employee: ${employee.name}
Salary: ₹${salary}
Experience: ${years} years
Bonus: ₹${bonus}
Total Salary: ₹${totalSalary}
`);
    } catch (error) {
        console.log("Employee Error:", error.message);
    }
}
