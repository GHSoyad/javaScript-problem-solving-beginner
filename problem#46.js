// Someone tells you their marks out of 100. Write a function which will return what their grade is based on their mark.


function getGrade(mark) {

    if (mark <= 100 && mark >= 80) {
        return "Grade is A"
    }
    else if (mark < 80 && mark >= 70) {
        return "Grade is B"
    }
    else if (mark < 70 && mark >= 60) {
        return "Grade is C"
    }
    else if (mark < 60 && mark >= 50) {
        return "Grade is D"
    }
    else if (mark < 50 && mark >= 0) {
        return "Grade is F"
    }
    else {
        return "Invalid mark!"    // Will return invalid if mark is greater than 100 or less than 0
    }
}

console.log(getGrade(101));
console.log(getGrade(100));
console.log(getGrade(85));
console.log(getGrade(75));
console.log(getGrade(65));
console.log(getGrade(55));
console.log(getGrade(45));
console.log(getGrade(0));
console.log(getGrade(-1));