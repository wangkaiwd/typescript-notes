interface Person {
  name: string;
  age: number;
}

// 将Person的每个属性都变为只读属性
interface PersonReadOnly {
  readonly name: string;
  readonly age: number;
}

// 通过Readonly来进行简写
type PersonReadOnly2 = Readonly<Person>;

// Readonly源码
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// 将Person的每个属性都变为可选
interface PersonPartial {
  name?: string;
  age?: number;
}

// 通过Partial来进行简写
type PersonPartial2 = Partial<Person>

// Partial源码
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

export {};
