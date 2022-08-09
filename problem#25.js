// Make an array of all the books you have. Now write a code that will skip all the books that cost more than $200. Only the books under $200 should be shown as output.

var bookPrices = [256, 389, 362, 128, 89, 423, 44, 176];

for (i = 0; i < bookPrices.length; i++) {
    let bookPrice = bookPrices[i];
    if (bookPrice > 200) {
        continue;    // Continue the loop after skipping the values more than 200
    }
    console.log(bookPrice);
}