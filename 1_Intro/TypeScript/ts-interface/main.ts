
// Like any other language, avoid passing too many arguments to a function
// It is better to encapsulate into an object.
//  let drawPoint = (x, y, a, b, c, d) => {
//      // ...
//  }

// First approach is to use inline annotation, usually works fine for simple applications.
// A drawback is that this declaration can't be reused in another function.
//  let drawPoint = (point: { x: number, y: number}) => {
//      // ...
//  }
//
//  drawPoint({
//      x: 1,
//      y: 2
//  })

// Interfaces can be defined as objects, just like any OOP like C# and Java.
// It will help simplify declaration and reuse.
// Pascal convention (Capitalized and UpperCamelCase) is also encouraged for interface name definition.
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
})