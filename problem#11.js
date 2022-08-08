// You are leaving for school in a hurry, but while crossing the road you saw the signal is red. If you try to cross the road at this time it will be dangerous. If you see the yellow signal you should slow down. and if the signal is green then you should go. Now write a code where signal will be a variable and the value can be red, yellow or green and what the output should do based on different signal.

// Declaring the variable
let trafficSignal = "red";

// Converting the string to lower case because switch cases are case sensitive
trafficSignal = trafficSignal.toLowerCase();

switch (trafficSignal) {
    case "green":
        // if traffic signal is green then it is safe to go
        console.log("It is safe to go.");
        break;
    case "yellow":
        // if traffic signal is yellow then slow down
        console.log("Please slow down.");
        break;
    case "red":
        // if traffic signal is red then it is dangerous
        console.log("Please stop! It is dangerous.");
        break;
    default:
        // if traffic signal is not green, yellow or red it is invalid
        console.log("Invalid signal!")
}