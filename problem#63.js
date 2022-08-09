// Declare an array. Find how many elements are inside the array. Change the fourth element of the array. Add two elements of the array. And remove one element from the array.

// Declare the array
const array = [45, 10, 5, 47, 8, 30, 2, 48];
console.log(array);

// Finding the elements of the array
let arraySize = array.length;
console.log(arraySize);

// Changing the fourth element of the array
array[3] = 57;
console.log(array);

// Adding two elements of the array
let addElements = array[1] + array[4];
console.log(addElements);

// Removing one element from the array
array.splice(7, 1);
console.log(array);