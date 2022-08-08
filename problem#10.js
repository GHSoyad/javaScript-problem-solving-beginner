// You are leaving for school in a hurry, but while crossing the road you saw the signal is red. If you try to cross the road at this time it will be dangerous. If you see the yellow signal you should slow down. and if the signal is green then you should go. Now write a code where signal will be a variable and the value can be red, yellow or green and what the output should do based on different signal.

let trafficSignal = "red";
trafficSignal = trafficSignal.toLowerCase();

switch (trafficSignal) {
    case "green":
        console.log("It is safe to go.");
        break;
    case "yellow":
        console.log("Please slow down.");
        break;
    case "red":
        console.log("Please stop! It is dangerous.");
        break;
    default:
        console.log("Invalid signal!")
}