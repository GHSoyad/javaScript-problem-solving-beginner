// Write a code to calculate interest. (Simple interest)

function interest(principle, rate, time) {
    rate = rate / 100;

    return principle * rate * time;

}

console.log(interest(4000, 7, 2))