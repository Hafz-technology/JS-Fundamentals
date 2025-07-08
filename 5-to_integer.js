const arguments = process.argv;
let firstArgument = arguments[2];

firstArgument = parseInt(firstArgument);
if (isNaN(firstArgument)) {
    console.log('Not a number');
} else {
    console.log(`My number: ${firstArgument}`);
}





