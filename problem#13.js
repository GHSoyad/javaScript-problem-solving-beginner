// Task list for everyday:
// Unlock module at 8 pm,
// Watch the videos and practice,
// Take notes while watching videos,
// After finishing the module practice it again,
// If you dont understand something join support session.
// Now use a while loop 10 times on the tasks and show output.

// Declare the array
let taskList = ["Unlock module at 8 pm", "Watch the videos and practice", "Take notes while watching videos", "After finishing the module practice it again", "If you dont understand something join support session"]

let i = 0;    // Initialize the outer loop
while (i < 2) {    // Set condition for outer loop to run 2 times
    let j = 0;    // Initialize the inner loop
    while (j < taskList.length) {    // Set condition for inner loop
        let task = taskList[j];
        console.log(task);
        j++;    //Increment inner loop
    }
    i++;    //Increment outer loop
}