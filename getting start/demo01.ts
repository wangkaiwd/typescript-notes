// const greeter = (person) => {
//   return `Hello, ${person}`;
// };
// let person = 'wangkaiwd';
//
// console.log(person);

// 解决不同文件共享作用域的问题：https://blog.fullstacktraining.com/cannot-redeclare-block-scoped-variable-name/
// TypeScript 使用DOM typing 来作为全局运行环境，即相当于所有文件在一个作用域内
// 1. 使用typescript 模块
// export {};
// 2. 不要为你的编译选项添加DOM typing,通过为tsconfig.json添加一个明确的`lib`属性
