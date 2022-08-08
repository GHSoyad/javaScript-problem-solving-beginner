// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. Print the result in 2 decimal places. (Assume marks for each subjects)

// Declaring the variables
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 65.45;
var bangla = 89.50;

// Adding all the variables and storing the result inside a variable
var totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log("Total marks:", totalMarks);

// Dividing total marks with the number of subjects to get the average mark
var averageMark = totalMarks / 5;
console.log("Average mark:", averageMark);

// Making average mark show only two decimal points
var averageMarkFixed = averageMark.toFixed(2);
console.log("Average mark with 2 decimal places:", averageMarkFixed);