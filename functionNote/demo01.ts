// 函数声明
function fn1 (x: number, y: number): number {
  return x + y;
}

// 函数表达式
const fn2 = function (x: number, y: number): number {
  return x + y;
};

// 完整函数类型
const fullFn2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 箭头函数
const fn3 = (x: number, y: number): number => {
  return x + y;
};

// 完整函数类型
// 在函数和返回值类型之间使用(=>)符号，这里要注意，容易与箭头函数的=>符号混淆
const fullFn3: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
};

// 如果函数没有任何返回值，需要指定返回值类型为void
const fn4 = (x: number, y: number): void => {
  console.log(x + y);
};

export {};
