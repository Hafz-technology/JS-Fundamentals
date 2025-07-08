const arguments = process.argv;
let firstArgument = arguments[2];



firstArgument = parseInt(firstArgument);

function factorial(a) {
    if (isNaN(a)) {
        return 1;
    }
    return a <= 1 ? 1 : a * factorial(a - 1);
}
let result = factorial(firstArgument);
console.log(result);
