// 使用联合类型实现
// const getLength = (something: number | string) => {
//   if (typeof something === 'string') {
//     return something.length;
//   } else if (typeof something === 'number') {
//     return something.toString().length
//   }
// }
// console.log(getLength('wangkaiwd'))
// 使用断言实现
var getLength = function (something) {
    // if(something.length) {
    // 要注意这里要通过括号将类型和值括起来(<string>something)
    if (something.length) {
        // 使用as语法实现
        return something.length;
    }
    else {
        return something.toString().length;
    }
};
console.log(getLength(1234));
// 注意：在jsx中只支持as语法
// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// const toBoolean = (something: string | number) => {
//   return <boolean>something
// }
