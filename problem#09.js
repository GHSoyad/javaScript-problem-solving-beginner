// You are given a triangle with the sides 9, 8, 9. Write a program to check whether a triangle is Equilateral or Isosceles or not using if-else. (Equilateral => => three sides are equal, Isosceles => two sides are equal)

// Declaring the variables
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 === side2 && side2 === side3 && side3 === side1) {
    //if all the sides, side 1 and side 2 and side 3 are equal
    console.log("The triangle is Equilateral!");
}
else if (side1 === side2 || side2 === side3 || side3 === side1) {
    //if two sides, (side and side 2) or (side 2 and side 3) or  (side 3 and side 1) are equal
    console.log("The triangle is Isosceles!");
}
else {
    // if all 3 sides are different
    console.log("The triangle is not Equilateral nor Isosceles!");
}