export class Point {
        constructor(private _x?: number, private _y?: number) {
        }
    
        draw() {
            console.log('X: ' + this.x + ', Y: ' + this.y)
        }
    
        get x() {
            return this.x;
        }
    
        set x(value) {
            if (value < 0) {
                throw new Error('value cannot be less than zero')
            }
    
            this.x = value;
        }
    }
    