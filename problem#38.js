// Write a function called leapYear() check if the next year 2023 is leap year or not. If its a leap year it will return true else it will return false.


function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(leapYear(2023));
console.log(leapYear(2024));
console.log(leapYear(2025));
console.log(leapYear(2026));