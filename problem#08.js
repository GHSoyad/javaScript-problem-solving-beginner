// You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

// Declaring the variables
var num1 = 1503;
var num2 = 719;
var num3 = 4500;

if (num1 > num2 && num1 > num3) {
    // if number 1 is greater than number 2 and number 3
    console.log("Number 1 is the largest", num1);
}
else if (num2 > num3) {
    // if number 2 is greater than number 3 and number 1
    console.log("Number 2 is the largest", num2);
}
else {
    // if number 3 is greater than number 1 and number 2
    console.log("Number 3 is the largest", num3);
}