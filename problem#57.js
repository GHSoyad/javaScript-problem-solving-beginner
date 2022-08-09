// Write a function to check if a number is prime number or not.


function isPrime(number) {

    // Prime number rule is number will only be divided by 1 or itself so we start the loop from 2 until the number to check if there is any other number that can do it.

    for (let i = 2; i < number; i++) {      // Loop through 2 until number
        if (number % i === 0) {     // If any other number is found that can divide the number evenly we return false 
            return false;
        }
    }
    return number > 1;      // We return number is a prime and greater than 1 to avoid negative numbers
}

console.log(isPrime(13));
console.log(isPrime(53));
console.log(isPrime(4));
console.log(isPrime(91));
console.log(isPrime(97));