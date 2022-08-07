// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.

var fruits = ["Apple", "Banana", "Orange"];

var bananaIndex = fruits.indexOf("Banana");
console.log("Index of Banana:", bananaIndex);

fruits[1] = "Mango";
console.log("Updated Array:", fruits);

fruits.pop();
console.log("Updated Array:", fruits);

fruits.push("Watermelon");
console.log("Updated Array:", fruits);