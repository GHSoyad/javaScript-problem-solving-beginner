// You placed first on your final exam. You dont know the grades of your friends Aliya, Daliya, Saliya, Maliya, Liliya, Jaliya. However you know their marks Aliya got 95, Daliya got 66, Saliya got 80, Maliya got 59, Liliya got 47, and Jaliya got 77. Write a JS code to find out their grades. (Use switch statement)
// Use the grading chart
// Those who got marks under 50, their grade is F,
// Those who got marks equal to or more than 50 and less than 60, their grade is D,
// Those who got marks equal to or more than 60 and less than 70, their grade is C,
// Those who got marks equal to or more than 70 and less than 80, their grade is B,
// Those who got marks equal to or more than 80 and less than 90, their grade is A,
// Those who got marks equal to or more than 90, their grade is A+.

// Declaring the variable
let marks = 77;

switch (true) {
    case (marks >= 0 && marks < 50):
        // if mark is greater than or equal to 0 and less than 50
        console.log("Your grade is F");
        break;
    case (marks >= 50 && marks < 60):
        // if mark is greater than or equal to 50 and less than 60
        console.log("Your grade is D");
        break;
    case (marks >= 60 && marks < 70):
        // if mark is greater than or equal to 60 and less than 70
        console.log("Your grade is C");
        break;
    case (marks >= 70 && marks < 80):
        // if mark is greater than or equal to 70 and less than 80
        console.log("Your grade is B");
        break;
    case (marks >= 80 && marks < 90):
        // if mark is greater than or equal to 80 and less than 90
        console.log("Your grade is A");
        break;
    case (marks >= 90 && marks <= 100):
        // if mark is greater than or equal to 90 and less than or equal to 100
        console.log("Your grade is A+");
        break;
    default:
        // if mark is not between 1 to 100
        console.log("Please enter a valid mark!")
        break;
}