// var is casted to the nearest function
// let is scoped to the nearest block
function doSomenthingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
function doSomenthingLet() {
    var aux;
    for (var i = 0; i < 5; i++) {
        aux = i;
        console.log(i);
    }
    console.log('Finally: ' + aux);
}
doSomenthingVar();
doSomenthingLet();
