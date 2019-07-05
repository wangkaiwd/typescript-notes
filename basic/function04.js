// 这里的剩余参数...items是数组，可以用数组类型来表示
var push = function (array) {
    var itmes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        itmes[_i - 1] = arguments[_i];
    }
    itmes.forEach(function (item) {
        array.push(item);
    });
    return array;
};
console.log(push([1, 2], 3, 4, 5));
