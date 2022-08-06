// Harry’s mom gave him money (1000) and asked him to buy some oranges (1kg = 300) and apples (1kg = 400). Write a program to help Harry calculate how much money the shopkeeper will return.

var moneyGiven = 1000;
var orangePrice = 300;
var applePrice = 400;

var totalPrice = orangePrice + applePrice;
console.log("Total price:", totalPrice);

var moneyReturned = moneyGiven - totalPrice;
console.log("Money returned:", moneyReturned);