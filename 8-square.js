const arguments = process.argv;
let firstArgument = arguments[2];

firstArgument = parseInt(firstArgument);
if (isNaN(firstArgument)) {
    console.log('Missing size');
} else {
    for (let i = 0; i < firstArgument; i++) {
        console.log('X'.repeat(firstArgument));
    }
}
