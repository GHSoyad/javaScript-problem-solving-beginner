// Write a function that takes 3 parametes, these parameters will be the the 3 sides of a triangle. Now find the area of the triangle and return from the function.


function triangleArea(side1, side2, side3) {
    // Using Heron's area of triangle formula
    const semi = (side1 + side2 + side3) / 2;    // First getting the semi-perimeter

    let area = Math.sqrt(semi * (semi - side1) * (semi - side2) * (semi - side3));    // Heron's area of triangle formula

    return area.toFixed(4);
}

console.log(triangleArea(8, 11, 13))