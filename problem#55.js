// Write a function to find the second largest element in an array.


let numbers = [45, 10, 5, 47, 8, 30, 2, 48]

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