"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var component = new like_component_1.LikeComponent(10, true);
component.onClick();
// The backtick (` `) operator is used to create a templeate string
console.log("likesCount: " + component.likesCount + ", isSelected: " + component.isSelected);
