// const 声明的变量不能改变值，这意味着，const 一旦声明变量就必须立即初始化，不能留到以后赋值
// 所以没有初始值的情况下只能使用let来定义
var array;
// 元祖其实就是固定长度以及数组中元素类型的数组，可以使用数组的属性和方法
// 赋值
array = ['hello', 1];
// 访问值以及使用一些方法
console.log(array[0].slice(1), array[1].toFixed(2));
