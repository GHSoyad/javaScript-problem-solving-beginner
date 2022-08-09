// You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow or red & we will get different activities as output depending on the variable. So, hurry up.


function activity(signal) {
    signal = signal.toLowerCase();    // Convert to lower case to match conditions

    if (signal === "red") {
        return "Please stop! It is dangerous.";
    } else if (signal === "yellow") {
        return "Please slow down!"
    } else if (signal === "green") {
        return "You should move now."
    } else {
        return "The signal is invalid!"
    }
}

let trafficSignal = "grEen";
console.log(activity(trafficSignal));