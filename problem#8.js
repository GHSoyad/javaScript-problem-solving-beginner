// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Equilateral or Isosceles or not using if-else. (Equilateral => => three sides are equal, Isosceles => two sides are equal)

var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 && side2 === side3 && side3 === side1) {
    console.log("The triangle is Equilateral!");
}
else if (side1 === side2 || side2 === side3 || side3 === side1) {
    console.log("The triangle is Isosceles!");
}
else {
    console.log("The triangle is not Equilateral nor Isosceles!");
}