// Write a function that takes celsius as input parameter and returns fahrenheit as output.


function celsiusToFahrenheit(celsius) {

    let fahrenheit = (celsius * 9 / 5) + 32;    // Celsius to fahrenheit formula

    return fahrenheit;
}

console.log(celsiusToFahrenheit(5));
console.log(celsiusToFahrenheit(25));
console.log(celsiusToFahrenheit(32));