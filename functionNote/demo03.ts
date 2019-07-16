const add = (x: number, y?: number) => {
  // y没有传入的时候只返回x,传入y的时候返回x+y
  return y ? x + y : x;
};
console.log(add(1)); // 1

// 指定默认值
const add2 = (x: number = 10, y?: number) => {
  return y ? x + y : x;
};
console.log(add2()); // 10

// 剩余参数
const sum = (firstNumber: number, ...restNumbers: number[]) => {
  let result: number = firstNumber;
  restNumbers.forEach(item => result += item);
  return result;
};
console.log(sum(2, 3, 4, 5, 6)); // 20
export {};
