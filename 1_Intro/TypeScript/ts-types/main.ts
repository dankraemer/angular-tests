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
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false]; // Not recommended, but compiler will not complain

// Enum variables (to be used instead of const declarations)
// Value attribution works as any other language
enum Color { Red = 0, Green = 1, Blue = 2 };
let backgroundColor = Color.Red;