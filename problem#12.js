// Task list for everyday:
// Unlock module at 8 pm,
// Watch the videos and practice,
// Take notes while watching videos,
// After finishing the module practice it again,
// If you dont understand something join support session.
// Now use a for loop 10 times on the tasks and show output

// Declare the array
let taskList = ["Unlock module at 8 pm", "Watch the videos and practice", "Take notes while watching videos", "After finishing the module practice it again", "If you dont understand something join support session"]


// Outer loop runs the inner loop two times
for (let i = 0; i < 2; i++) {
    // Inner loop runs 5 times to output all the array items once
    for (let j = 0; j < taskList.length; j++) {
        let task = taskList[j];
        console.log(task);
    }
}