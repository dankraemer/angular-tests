// Moved class Point definition into point.ts file
// In TypeScript, programs are divided in multiple files 
// and each file can be handled as a module.

// Use 'import' keyword to reference modules from a relative path.
// The path does not use '.ts' extension.
// Ex: import { Point, a, b, c } from './point'
import { Point } from './point'

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
point.draw();