interface Add {
  (a: number, b: number): number;
}

// 这里感觉在校验 函数参数a,b的时候会有问题
const add: Add = (a, b) => {
  return a + b;
};

console.log(add(1, 2));
export {};