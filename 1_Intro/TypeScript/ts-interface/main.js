// Like any other language, avoid passing too many arguments to a function
// It is better to encapsulate into an object.
//  let drawPoint = (x, y, a, b, c, d) => {
//      // ...
//  }
var drawPoint = function (point) {
    // ...
};
drawPoint({
    x: 1,
    y: 2
});
