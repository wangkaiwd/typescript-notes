interface Person {
  name: string;
  age: number;
}
// 索引类型查询操作符： 对于任意类型T,keyof T的结果为T上已知的公共属性名的联合
// 索引访问操作符：T[K] 在这里表示person['name']具有类型Person['name']即string('age'同理)
const getValues = <T, K extends keyof T> (o: T, names: K[]): T[K][] => {
  // T => { name: string, age:number }
  // keyof T => 'name' | 'age'
  // K extends T => 'name' | 'age'
  // 为了防止o[name]是undefined,要确保names数组中的每一项都包含在o的属性中
  return names.map(name => o[name]);
};

// keyof Person是完全可以与 'name'|'age'互相替换的，不同的是当我们为Person添加了新的属性，keyof Person也会自动添加新的属性

// console.log(getValues({ name: 'wangkaiwd', age: 12 }, ['age', 'name'])); // [12,'wangkaiwd']
// 完整语法
getValues<Person, keyof Person>({ name: 'wangkaiwd', age: 12 }, ['age', 'name']);

const getValue = <T, K extends keyof T> (o: T, name: K): T[K] => {
  return o[name];
};
const person: Person = {
  name: 'ts1',
  age: 2
};
console.log(getValue(person, 'age')); // 2

type X = keyof Person; // X 的类型为 'name' | 'age'
export {};
