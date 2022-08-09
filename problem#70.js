// Write a function called paperRequirements. The function will take 3 parameters as input. The first parameter will be how many copies of the first book you want to print, the second parameter will be for copies of the second book, and the third parameter will be for copies of the third book.
// The requirement for each book is:
// First book needs 100 pages to print,
// Second book needs 200 pages to print,
// Third book needs 300 pages to print.
// Call the paperRequirements function and input 3 parameters of books that need to be printed, and return the number of pages needed to print all the books.


function paperRequirements(book1, book2, book3) {

    const book1Paper = book1 * 100;    // Paper needed for first book
    const book2Paper = book2 * 200;    // Paper needed for second book
    const book3Paper = book3 * 300;    // Paper needed for third book

    const sumPaper = book1Paper + book2Paper + book3Paper;    // Total paper needed for all the books

    return sumPaper;
}

console.log("Total papers needed:", paperRequirements(2, 0, 0));
console.log("Total papers needed:", paperRequirements(1, 1, 1));
console.log("Total papers needed:", paperRequirements(2, 0, 1));
console.log("Total papers needed:", paperRequirements(0, 4, 2));
console.log("Total papers needed:", paperRequirements(4, 2, 3));