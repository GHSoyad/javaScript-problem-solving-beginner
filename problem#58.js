// Write functions to add, subtract, multiply, divide and find remainder of two given numbers. Take 2 number type variables and store their result in another variable.


function add(num1, num2) {
    result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    result = num1 - num2;
    return result;
}

function multiply(num1, num2) {
    result = num1 * num2;
    return result;
}

function divide(num1, num2) {
    result = num1 / num2;
    return result;
}

function remainder(num1, num2) {
    result = num1 % num2;
    return result;
}

let number1 = 5;
let number2 = 5;

console.log("Addition is:", add(number1, number2));
console.log("Subtraction is:", subtract(number1, number2));
console.log("Multiplication is:", multiply(number1, number2));
console.log("Division is:", divide(number1, number2));
console.log("Remainder is:", remainder(number1, number2));