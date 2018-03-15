var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x);
        console.log('Y: ' + this.y);
    };
    Point.prototype.getDistance = function () {
        // ...
    };
    return Point;
}());
// Since this class is a custom type, memory should be allocated prior to use.
// Otherwise, compile problems will appear.
//   let point: Point = new Point();
// Or a cleaner syntax:
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
