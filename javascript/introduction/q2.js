
const userName = "Govind";
const age = 21;
const isStudent = true;
const skills = ["JavaScript", "HTML", "CSS"];
const user = { city: "Mathura", course: "B.Tech CSE" };
const middleName = null;
let address;

const data = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Address", Value: String(address), Type: typeof address }
];

// Display all data in a formatted table
console.table(data);
