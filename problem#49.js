// Write a function and take an array as a parameter. Find the average of all the elements of that array and return this average.


let numbers = [45, 10, 5, 7, 8, 30, 2, 48];

function arrayAverage(array) {

    let sum = 0;

    for (i = 0; i < array.length; i++) {
        let number = array[i];
        sum += number;
    }

    let average = sum / array.length;

    return average;
}

console.log(arrayAverage(numbers));