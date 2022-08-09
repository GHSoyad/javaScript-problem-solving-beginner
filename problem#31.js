// Write a function to show the output of multiplication table of 13


function multiplicationTable(num) {
    for (i = 1; i <= 10; i++) {
        console.log(num, "*", i, "=", num * i);
    }
}

multiplicationTable(13);