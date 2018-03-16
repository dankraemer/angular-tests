// In OOP, there usually exists access modifiers,
// which main objective is to control the internal elements access level.

class Point {

    //private x: number;
    //private y: number;

    // TypeScript compiler will provide x and y attributes in Point class
    constructor(private x?: number, private y?: number) {
        // Also this redundant attribution is generated automatically
        //this.x = x;
        //this.y = y;
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