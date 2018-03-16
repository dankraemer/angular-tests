class Point {
    constructor(private _x?: number, private _y?: number) {
     }

    draw() {
      console.log('X: ' + this._x);
      console.log('Y: ' + this._y);
    }

    // In Typescript, get and set are keywords to define properties.
    // A property looks like a field from the outside, but internally is really a method in the class.
    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
          throw new Error('value cannot be less than 0');

        this._x = value;
    }
}

let point = new Point(1, 2);
// It provides a cleaner and intuitive syntax like fields, without having to make a direct call to a function.
let x = point.x;
point.x = 10;
point.draw();