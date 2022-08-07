// You and your friends Tom, Jane, Peter and John got their final exam results. Your total score is 85, Tom’s total score is 66, Jane’s total score is 95, Peter’s total score is 56 and John’s total score is 40.
// The grading chart is
// 80 or above A grade
// 60 or above B grade
// 50 or above C grade
// 40 or above D grade
// 39 or less => F grade
// Write a program to find your and your friends’ grades using if-else.

var totalScore = 85;

if (totalScore <= 100 && totalScore >= 80) {
    console.log("Your grade is A.");
}
else if (totalScore < 80 && totalScore >= 60) {
    console.log("Your grade is B.");
}
else if (totalScore < 60 && totalScore >= 50) {
    console.log("Your grade is C.");
}
else if (totalScore < 50 && totalScore >= 40) {
    console.log("Your grade is D.");
}
else if (totalScore < 39 && totalScore >= 0) {
    console.log("Your grade is F.");
}
else {
    console.log("Plese enter a valid score!");
}