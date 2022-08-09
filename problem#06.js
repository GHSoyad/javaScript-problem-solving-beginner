// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

// Declaring the array
var fruits = ["Apple", "Banana", "Orange"];

// Getting the index number of Banana and storing it in a variable
var bananaIndex = fruits.indexOf("Banana");
console.log("Index of Banana:", bananaIndex);

// Replacing Mango with Banana
fruits[1] = "Mango";
console.log("Updated Array:", fruits);

// Removing an item from the end of the array
fruits.pop();
console.log("Updated Array:", fruits);

// Adding an item at the end of the array
fruits.push("Watermelon");
console.log("Updated Array:", fruits);