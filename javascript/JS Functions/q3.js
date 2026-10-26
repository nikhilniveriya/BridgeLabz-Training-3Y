
"use strict";

// Arrow function does not have its own this
const user = {
    name: "Arpit",
    showName: () => {
        console.log("Arrow function:", this.name);
    }
};

user.showName();

// Normal function gets this from the calling object
const user2 = {
    name: "Arpit",
    showName: function () {
        console.log("Normal function:", this.name);
    }
};

user2.showName();
