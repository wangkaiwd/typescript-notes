const returnIt = (something: any): any => {
  return something;
};

console.log(returnIt(1)); // 1数字

const returnIt2 = (something: any): any => {
  return something.toString();
};

console.log(returnIt2(1)); // 1(字符串)

// 这里的T是类型变量，它是一种特殊的变量，只用于表示类型而不是值
const returnIt3 = <T> (something: T): T => {
  return something;
};
// 调用方法一： 传入所有的参数，包括类型参数
console.log(returnIt3<string>('string'));
// console.log(returnIt3<string>(1)); // 这里在制定了类型参数后，传入参数的类型也会被指定

// 调用方法二： 利用类型推论，让编辑器帮助我们进行类型判断
console.log(returnIt3('string')); // 返回值类型为string
console.log(returnIt3(12)); // 返回值类型为number

