
const currentSalary = 40000;
const annualIncrementRate = 10; // 10% per year

let salary = currentSalary;
const salaryDetails = [];

for (let year = 1; year <= 5; year++) {
    // Increase salary every year
    salary += salary * annualIncrementRate / 100;

    salary = Math.round(salary);

    salaryDetails.push({
        Year: year,
        Salary: salary
    });
}

// Display yearly salary projection
console.table(salaryDetails);
