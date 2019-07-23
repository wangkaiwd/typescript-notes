const returnObject = <T> (something: T): T => {
  return something;
};
// 传入一个对象
// 通过接口来限制传入属性以及属性的类型
interface Human {
  name: string;
  age: number;
}
console.log(returnObject<Human>({ name: 'wangkaiwd', age: 12 }));

// 实现returnArray函数返回数组，并且数组中的每一项的类型为传入类型
const returnArray = <T> (something: T[]): T[] => {
  return something;
};

// 上边函数的完整类型书写方式
const returnArrayFull: <T>(something: T[]) => T[] = <T> (something: T[]): T[] => {
  return something;
};

// 用对象来描述带有类型参数的函数类型
const returnArrayFull2: { <T> (something: T[]): T[] } = <T> (something: T[]): T[] => {
  return something;
};

// 用接口描述带有类型参数的函数类型
interface ReturnArrayFull3 {
  <T> (something: T[]): T[]
}
const returnArrayFull3: ReturnArrayFull3 = (something) => {
  return something;
};

console.log(returnArray<number>([1, 2, 3, 4]));
export {};
