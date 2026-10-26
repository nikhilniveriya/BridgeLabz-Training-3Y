
let productName = " wireless headphones PRO ";

// Remove extra spaces and convert to lowercase
let cleanedTitle = productName.trim().toLowerCase();

// Capitalize the first letter of every word
cleanedTitle = cleanedTitle
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace Pro with Pro Edition
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log("Product Title:", cleanedTitle);
console.log("Title Length:", cleanedTitle.length);
