// Write a code to find the smallest number between 3 numbers.


function smallestNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return "Number 1 is the smallest";
    }
    else if (num2 < num3) {
        return "Number 2 is the smallest";
    }
    else {
        return "Number 3 is the smallest";
    }
}

console.log(smallestNumber(4, 1, 7));
console.log(smallestNumber(24, 138, 79));
console.log(smallestNumber(25, 71, 67));
console.log(smallestNumber(154, 81, 17));
console.log(smallestNumber(454, 351, 735));