// Task list for everyday:
// Unlock module at 8 pm,
// Watch the videos and practice,
// Take notes while watching videos,
// After finishing the module practice it again,
// If you dont understand something join support session.
// Now solve the same problem with a reverse while loop (decremental).

// Declare the array
let taskList = ["Unlock module at 8 pm", "Watch the videos and practice", "Take notes while watching videos", "After finishing the module practice it again", "If you dont understand something join support session"]

let i = 2;    // Initialize the outer loop
while (i > 0) {    // Set condition for outer loop to run 2 times
    let j = taskList.length - 1;    // Initialize the inner loop
    while (j >= 0) {    // Set condition for inner loop
        let task = taskList[j];
        console.log(task);
        j--;    //Decrement inner loop
    }
    i--;    //Decrement outer loop
}