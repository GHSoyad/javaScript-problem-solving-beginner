// If you are asked to fulfill two conditions and you have to fulfill both of them can you check it? Similarly can you fulfill either one of the conditions? Write a code to to check it if you can. (Use && or || operators)


let myMoney = 5500;
let myTime = 6;
let myDetermination = true;
let myCondition = true;


if (myMoney >= 5500 && myDetermination === true) {
    console.log("I am ready to enroll programming hero course!")
} else {
    console.log("I am not ready to enroll programming hero course!")
}

if (myCondition === false || myTime >= 6) {
    console.log("I will finish programming hero course!")
} else {
    console.log("I will not be able to finish programming hero course!")
}