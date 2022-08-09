// Harry’s mom gave him money (1000) and asked him to buy some oranges (1kg = 300) and apples (1kg = 400). Write a program to help Harry calculate how much money the shopkeeper will return.

// Declaring the variables
var moneyGiven = 1000;
var orangePrice = 300;
var applePrice = 400;

// Adding the prices and storing the result inside a variable
var totalPrice = orangePrice + applePrice;
console.log("Total price:", totalPrice);

// Subtracting the money given with total price and storing the result inside a variable
var moneyReturned = moneyGiven - totalPrice;
console.log("Money returned:", moneyReturned);