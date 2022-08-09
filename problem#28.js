// Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


function make_avg(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        sum += num;
    }
    console.log(sum);

    let numAverage = sum / array.length;

    return numAverage;
}

let numArray = [4, 6, 12, 5, 7, 48, 13, 25];

console.log(make_avg(numArray));
