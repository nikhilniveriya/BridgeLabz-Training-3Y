
"use strict";

// Add myMap method to the Array prototype
Array.prototype.myMap = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // Match map() behavior by skipping empty array slots
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }

    return result;
};

// Test the custom method
console.log([1, 2, 3].myMap(num => num * 2));
console.log([1, 2, 3].myMap(num => num * num));
console.log([10, 20, 30].myMap((num, index) => num + index));
