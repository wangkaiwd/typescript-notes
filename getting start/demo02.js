// 类型注解
var greeter = function (person) {
    return "Hello, " + person;
};
// console.log(greeter()); // expected 1 arguments,but got 0
// console.log(greeter('name1', 'name2')); // expected 1 arguments,but got 2
// const person = null; // Hello, null
// const person = undefined; // Hello, undefined
// const person = 10; // arguments of type 10 is not assignable to parameter of type 'string'
// const person = [1, 2, 3]; // arguments of type 'number[]' is not assignable to parameter of type 'string'
var person = 'wangkaiwd';
console.log(greeter(person));
