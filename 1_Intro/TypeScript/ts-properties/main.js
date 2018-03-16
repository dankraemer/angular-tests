var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x);
        console.log('Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // In Typescript, get and set are keywords to define properties.
        // A property looks like a field from the outside, but internally is really a method in the class.
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
// It provides a cleaner and intuitive syntax like fields, without having to make a direct call to a function.
var x = point.x;
point.x = 10;
point.draw();
