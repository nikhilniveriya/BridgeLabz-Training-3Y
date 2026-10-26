
"use strict";

// Parent class
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log("Name:", this.name);
    }
}

// Child class inherits from Person
class Student extends Person {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log("Branch:", this.branch);
    }
}

// Create student object
const student1 = new Student("Arpit", "CSE");

student1.showName();
student1.showBranch();

console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
