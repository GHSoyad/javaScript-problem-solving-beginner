// A array has some positive and negative numbers in it. Your task is to check the numbers one by one. You need to show all the positive numbers in a new array, however the loop should stop afte you encounter the negative number. You need to return all the positive numbers until the loop stops.


const numbers = [45, 10, 5, 47, -8, 30, 2, 48]

let positiveNumbers = [];

for (i = 0; i < numbers.length; i++) {

    let number = numbers[i];

    if (number < 0) {
        break;
    }

    positiveNumbers.push(number);
}

console.log(positiveNumbers);