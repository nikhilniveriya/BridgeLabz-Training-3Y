
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const errors = [];
const under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const user = JSON.parse(rawData[i]);

        if (user.user == null || user.age == null ||
            String(user.user).trim() === "") {
            throw new Error("Missing user or age");
        }

        const age = Number(user.age);

        if (!Number.isFinite(age) || age < 0) {
            throw new Error("Invalid age");
        }

        const cleanedUser = {
            user: user.user,
            age: age
        };

        cleanData.push(cleanedUser);

        if (age < 18) {
            under18Users.push(cleanedUser);
        }

        console.log(`Line ${i + 1}: Valid`);
    } catch (error) {
        errors.push({
            line: i + 1,
            message: error.message
        });

        console.log(`Line ${i + 1} Error: ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("Errors:", errors);
console.log("Valid Count:", cleanData.length);
console.log("Error Count:", errors.length);
console.log("Users Under 18:", under18Users);

// Debugging: Set a breakpoint at JSON.parse().
