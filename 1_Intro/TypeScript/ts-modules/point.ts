// The 'export' keyword will allow the class Point to be visible from the outside
export class Point {
    constructor(private _x?: number, private _y?: number) {
     }

    draw() {
      console.log('X: ' + this._x);
      console.log('Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    set x(value) {
        if (value < 0)
          throw new Error('value cannot be less than 0');

        this._x = value;
    }
}