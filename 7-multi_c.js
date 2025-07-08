const arguments = process.argv;
let firstArgument = arguments[2];

firstArgument = parseInt(firstArgument);
if (isNaN(firstArgument)) {
    console.log('Missing number of occurrences');
} else {
    for (let i = 0; i < firstArgument; i++) {
        console.log('C is fun');
    }
}

