// 泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
// 实现一个函数：传入length和value，然后生成长度为length并且每一项值为value的一个数组并返回
// 这样并没有准确的定义返回值的类型
// const createArray = (length: number, value: any): Array<any> => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// };
// 通过泛型来约束返回值的类型，这样返回值得类型就会和value传入的类型相同，准确的描述了返回值的类型
var createArray = function (length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
};
console.log(createArray(4, 6)); // [6,6,6,6]
console.log(createArray(4, 'hello')); // ['hello','hello','hello','hello']
// 完整格式
// const createArray: <T>(length: number, value: T) => Array<T> = <T> (length: number, value: T): Array<T> => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// };
