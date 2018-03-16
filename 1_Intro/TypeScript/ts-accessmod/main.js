// In OOP, there usually exists access modifiers,
// which main objective is to control the internal elements access level.
var Point = /** @class */ (function () {
    //private x: number;
    //private y: number;
    // TypeScript compiler will provide x and y attributes in Point class
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // Also this redundant attribution is generated automatically
        //this.x = x;
        //this.y = y;
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
var point = new Point(1, 2);
point.draw();
