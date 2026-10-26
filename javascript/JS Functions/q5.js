
"use strict";

// Parent constructor
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log("Name:", this.name);
};

// Child constructor
function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Inherit Person prototype
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Student-specific method
Student.prototype.showBranch = function () {
    console.log("Branch:", this.branch);
};

const student1 = new Student("Arpit", "CSE");

student1.showName();
student1.showBranch();

// Verify prototype chain
console.log(student1 instanceof Student);
console.log(student1 instanceof Person);
