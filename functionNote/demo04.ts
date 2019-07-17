function add (x: number, y: number): number;
function add (x: string, y: string): string;
// function add (x:any,y:any): any 并不是重载列表的一部分
function add (x: any, y: any): any {
  return x + y;
};
// 我们希望传入的参数都是number或都是string
console.log(add(1, 2));
console.log(add('1', '2'));
// 函数参数类型不同时会提示错误信息
// console.log(add('1', 2)); // TS2345: Argument of type '2' is not assignable to parameter of type 'string'.
export {};
