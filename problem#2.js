// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student. Print the result in 2 decimal places. (Assume marks for each subjects)

var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 65.45;
var bangla = 89.50;

var totalMarks = mathematics + biology + chemistry + physics + bangla;
console.log("Total marks:", totalMarks);

var averageMark = totalMarks / 5;
console.log("Average mark:", averageMark);

var averageMarkFixed = averageMark.toFixed(2);
console.log("Average mark with 2 decimal places:", averageMarkFixed);