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


// Example using process.stdout.write()
process.stdout.write("This will be on the same line.");
process.stdout.write("This continues on the same line.\n"); // Add \n manually for a newline

console.log("This will start on a new line and add its own newline.");