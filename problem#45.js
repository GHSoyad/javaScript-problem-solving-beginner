// Now do problem 44 in reverse. Take fahrenheit as input parameter and return celsius as output.


function fahrenheitToCelsius(fahrenheit) {

    let celsius = (fahrenheit - 32) * 5 / 9;    //Fahrenheit to celsius formula

    return celsius;
}

console.log(fahrenheitToCelsius(0));
console.log(fahrenheitToCelsius(32));
console.log(fahrenheitToCelsius(57));