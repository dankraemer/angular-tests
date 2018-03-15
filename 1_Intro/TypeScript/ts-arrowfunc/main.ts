// Arrow functions have a cleaner declaration

// In JS, we can declare a function this way:
var log = function(message) {
    console.log(message);
}

// In TypeScript, it uses te "fat arrow" syntax.
// If the function is simple, the parenthesis can be supressed
// Similar to C# Lambda functions.
let doLog = (message) => {
    console.log(message);
}
