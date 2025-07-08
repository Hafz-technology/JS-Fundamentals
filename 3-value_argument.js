const arguments = process.argv;

let firstArgument = arguments[2];
if (firstArgument === undefined) {
    firstArgument = 'No argument';
}
console.log(firstArgument);