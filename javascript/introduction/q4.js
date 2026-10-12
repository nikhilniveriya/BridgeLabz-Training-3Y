
const marks = [90, 85, 78, 88, 92];

// Calculate total, average and percentage
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// Check whether any subject has marks below 35
const failed = marks.some(mark => mark < 35);

// Decide the result
if (failed || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else {
    console.log("Promoted");
}

console.log("Total Marks:", totalMarks);
console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
