// Write a function findOddSum() that will take the array [ 5, 7, 8, 10, 45, 30 ] as the input parameter and will return the sum of the odd numbers.


function findOddSum(array) {

    let sumOdd = 0;

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (number % 2 === 1) {
            sumOdd += number;
        }
    }

    return sumOdd;
}

let numbers = [5, 7, 8, 10, 45, 30];

console.log(findOddSum(numbers));