// Write a function called make_avg() which will take an three integers and return the average of those values.


function make_avg(num1, num2, num3) {
    numTotal = num1 + num2 + num3;
    numAverage = numTotal / 3;
    return numAverage;
}

console.log(make_avg(4, 5, 6));
console.log(make_avg(8, 18, 25));
console.log(make_avg(6, 8, 10));
console.log(make_avg(9, 27, 15));
console.log(make_avg(44, 58, 60));