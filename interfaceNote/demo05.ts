interface Add {
  // 描述当前函数：参数和返回值
  (a: number, b: number): number;

  // 当前函数的属性opposite也是一个函数
  opposite (a: number, b: number): number
}

// // 这里感觉在校验 函数参数a,b的时候会有问题
// const add: Add = (a, b) => {
//   return a + b;
// };
// add.opposite = (a, b) => {
//   return a - b;
// };
//
// console.log('add', add(1, 2));
// console.log('reduce', add.opposite(1, 2));

const add: Add = (() => {
  const x: any = (a: number, b: number) => {
    return a + b;
  };
  x.opposite = (a: number, b: number) => {
    return a - b;
  };
  return x;
})();
console.log('add', add.opposite(2, 1));
export {};
