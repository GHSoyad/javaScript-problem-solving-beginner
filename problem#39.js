// Check if your age is odd or even with a function. If you input a number as parameter it will return true if the number is even else it will return false if the number is odd.


function isOddEven(age) {
    if (age % 2 === 0) {
        return true;
    } else if (age % 2 === 1) {
        return false;
    }
    else {
        return "Invalid age."
    }
}

console.log(isOddEven(26));
console.log(isOddEven(15));
console.log(isOddEven(32));