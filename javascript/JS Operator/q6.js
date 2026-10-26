
let count = 0;

// Increment counter
function increment() {
    count++;
    console.log("Count:", count);
}

// Decrement counter
function decrement() {
    count--;
    console.log("Count:", count);
}

// Nested function to access and update count
function counterStatus() {
    function updateCount() {
        count += 2;
        console.log("Count after nested update:", count);
    }

    updateCount();
}

// Simulate button clicks
increment();
increment();
decrement();
counterStatus();
