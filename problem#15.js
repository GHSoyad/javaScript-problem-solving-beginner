// Task list for everyday:
// Unlock module at 8 pm,
// Watch the videos and practice,
// Take notes while watching videos,
// After finishing the module practice it again,
// If you dont understand something join support session.
// Now solve the same problem with a reverse for loop (decremental).

// Declare the array
let taskList = ["Unlock module at 8 pm", "Watch the videos and practice", "Take notes while watching videos", "After finishing the module practice it again", "If you dont understand something join support session"]

// Outer loop runs the inner loop two times
for (i = 2; i > 0; i--) {
    // Inner loop runs 5 times to output all the array items once
    for (j = taskList.length - 1; j > 0; j--) {
        let task = taskList[j];
        console.log(task);
    }
}