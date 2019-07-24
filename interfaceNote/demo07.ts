// 对象的属性为任意字符串，属性值为数值
interface NumberObject {
  [key: string]: number;

  // hairColor: string // TS2411: Property 'hairColor' of type 'string' is not assignable to string index type 'number'.
}

// 这里的属性值必须为number类型
// const obj1: NumberObject = { name: 'wangkaiwd', age: 12 }; // Type 'string' is not assignable to type 'number'.
const obj1: NumberObject = { name: 11, age: 12 }; // ok

// 数组中每一项都是字符串
interface StringArray {
  [key: number]: string
}

// string类型不能分配给number
// const arr: StringArray = [1,2]; //TS2322: Type 'string' is not assignable to type 'number'.

const arr: StringArray = ['1', '2']; // OK

export {};
