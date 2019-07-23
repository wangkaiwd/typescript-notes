interface HasLength {
  length: number
}
// 使用类型变量继承对应的接口，则传入的参数被限制为必须要有length属性
const returnHasLengthElement = <T extends HasLength> (something: T): T => {
  console.log(something.length);
  return something;
};
// 12对应的number类型没有length属性
// returnHasLengthElement(12) // TS2345: Argument of type '12' is not assignable to parameter of type 'HasLength'

// 字符串是有length属性的
console.log(returnHasLengthElement('12')); // 12 字符串
export {};
