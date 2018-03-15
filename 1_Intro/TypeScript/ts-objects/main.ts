
class Point {
    x: number;
    y: number;
    draw() {
      console.log('X: ' + this.x);
      console.log('Y: ' + this.y);
    }

    getDistance() {
        // ...
    }
}

// Since this class is a custom type, memory should be allocated prior to use.
// Otherwise, compile problems will appear.
//   let point: Point = new Point();
// Or a cleaner syntax:
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();