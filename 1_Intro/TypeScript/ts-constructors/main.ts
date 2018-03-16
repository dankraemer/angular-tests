
class Point {
    x: number;
    y: number;

    // TypeScript supports only one constructor, unlike C++ constructors with multiple signatures.
    // To surpass this limitation, the fields can be declared as optional
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
      console.log('X: ' + this.x);
      console.log('Y: ' + this.y);
    }

    getDistance() {
        // ...
    }
}

let point = new Point(1, 2);
point.draw();