// To follow the cohesion principle, things that are related should belong together.
// That's the problem with the interface solution.
// Interfaces are purely for declarations, they cannot include any implementations.
//
//  interface Point {
//      x: number,
//      y: number
//  }
//
//  let drawPoint = (point: Point) => {
//      // ...
//  }
//
//  drawPoint({
//      x: 1,
//      y: 2
//  })

// A class should be used to achieve cohesion between variables and methods that are related.
class Point {
    x: number;
    y: number;
    draw() {
        // ...
    }

    getDistance() {
        // ...
    }
}