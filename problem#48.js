// Suppose, you have an array with 8 elements. Find the smallest element of that array. Now for the previous array, try to find the second largest element.


let numbers = [45, 10, 5, 7, 8, 30, 2, 48]

function smallestNumber(array) {

    let smallestElement = array[0];

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number < smallestElement) {
            smallestElement = number;
        }
    }

    return smallestElement;
}

console.log(smallestNumber(numbers));

// -------------------------------------

function secondLargest(array) {
    let secondLargest = array[0];

    for (let i = 0; i < array.length - 1; i++) {
        let number = array[i];
        if (number > secondLargest) {
            secondLargest = number;
        }
    }
    return secondLargest;
}

console.log(secondLargest(numbers));