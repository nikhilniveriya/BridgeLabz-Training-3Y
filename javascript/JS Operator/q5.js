
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check all security conditions
function checkSecurity() {
    if (
        isAlarmOn &&
        isDoorLocked &&
        isWindowClosed &&
        isOwnerInside
    ) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }
}

checkSecurity(); // Secure

// Test another outcome
isWindowClosed = false;
checkSecurity(); // Unsafe

// Test another outcome
isWindowClosed = true;
isAlarmOn = false;
checkSecurity(); // Unsafe

// Demonstrate OR and NOT operators
console.log("Any opening unlocked:", !isDoorLocked || !isWindowClosed);
