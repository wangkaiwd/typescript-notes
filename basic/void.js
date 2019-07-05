// es5
function doSomething1() {
    console.log('this function no return value');
}
// es6
var doSomething2 = function () {
    console.log('this function no return value');
};
doSomething1();
doSomething2();
var unusable = undefined;
