// Write a function. The function will take an array as input parameter. The array will contain some numbers. Now you have to find the average of all these numbers and return the average from the function.


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