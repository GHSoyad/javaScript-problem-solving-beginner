// Write a code to find the smallest number in an array.


let array = [45, 10, 5, 7, 8, 30, 2, 48];

let smallestNumber = array[0];

for (i = 0; i < array.length; i++) {
    let number = array[i];

    if (number < smallestNumber) {
        smallestNumber = number;
    }
}

console.log(smallestNumber);