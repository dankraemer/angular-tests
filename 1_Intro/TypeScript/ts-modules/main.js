"use strict";
// Moved class Point definition into point.ts file
// In TypeScript, programs are divided in multiple files 
// and each file can be handled as a module.
exports.__esModule = true;
// Use 'import' keyword to reference modules from a relative path.
// The path does not use '.ts' extension.
// Ex: import { Point, a, b, c } from './point'
var point_1 = require("./point");
var point = new point_1.Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
