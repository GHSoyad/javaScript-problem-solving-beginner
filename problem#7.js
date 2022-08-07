// You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else.

var num1 = 1503;
var num2 = 719;
var num3 = 4500;

if (num1 > num2 && num1 > num3) {
    console.log("Number 1 is the largest", num1);
}
else if (num2 > num3) {
    console.log("Number 2 is the largest", num2);
}
else {
    console.log("Number 3 is the largest", num3);
}