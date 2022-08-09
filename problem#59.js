// Can you comapre between two variables? Write functions to check if two numbers are equal, not equal, greater, less, greater than or equal and less than or equal. Declare two number variables and compare them.


function isEqual(num1, num2) {
    if (num1 === num2) {
        console.log(num1, "is equal to", num2);
    }
}

function isNotEqual(num1, num2) {
    if (num1 !== num2) {
        console.log(num1, "is not equal to", num2);
    }
}

function isGreater(num1, num2) {
    if (num1 > num2) {
        console.log(num1, "is greater than", num2);
    }
}

function isLess(num1, num2) {
    if (num1 < num2) {
        console.log(num1, "is less than", num2);
    }
}

function isGreaterEqual(num1, num2) {
    if (num1 >= num2) {
        console.log(num1, "is greater than or equal to", num2);
    }
}

function isLessEqual(num1, num2) {
    if (num1 <= num2) {
        console.log(num1, "is less than or equal to", num2);
    }
}

let number1 = 6;
let number2 = 7;

isEqual(number1, number2);
isNotEqual(number1, number2);
isGreater(number1, number2);
isLess(number1, number2);
isGreaterEqual(number1, number2);
isLessEqual(number1, number2);