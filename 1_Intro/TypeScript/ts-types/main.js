// This code will show an error, but it will still transpile to javascript
// {
//   let count = 5;
//   count = 'a';
// }
// It will still generate a valid javascript code:
// {
//   var count = 5;
//   count = 'a';
// }
// Use type annotations if the variable type is known ahead of time
// TypeScript will check for type consistency
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false]; // Not recommended, but compiler will not complain
// Enum variables (to be used instead of const declarations)
// Value attribution works as any other language
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
