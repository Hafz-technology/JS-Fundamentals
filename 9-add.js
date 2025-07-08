const arguments = process.argv;
let firstArgument = arguments[2];
let secondArgument = arguments[3];


firstArgument = parseInt(firstArgument);
secondArgument = parseInt(secondArgument);

function add(a, b) {
    return a + b;
}
let result = add(firstArgument, secondArgument);
console.log(result);

// if (isNaN(firstArgument)) {
//     console.log('Missing size');
// } else {
//     for (let i = 0; i < firstArgument; i++) {
//         console.log('X'.repeat(firstArgument));
//     }
// }
