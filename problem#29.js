// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. You need to do it in 4 ways:
// ● Has return + Has parameter
// ● No return + Has parameter


// Has return + Has parameter
function odd_even(num) {
    if (num % 2 === 0) {
        return "This is an even number.";
    }
    else {
        return "This is an odd number.";
    }
}

console.log(odd_even(4));
console.log(odd_even(5));
console.log(odd_even(23));
console.log(odd_even(56));

/*---------------------------------------------*/

// No return + Has parameter
function odd_even2(num) {
    if (num % 2 === 0) {
        console.log("This is an even number.");
    }
    else {
        console.log("This is an odd number.");
    }
}

odd_even2(5);
odd_even2(8);
odd_even2(82);
odd_even2(35);