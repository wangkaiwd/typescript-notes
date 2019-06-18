interface Person {
  readonly id: number, // 只读属性
  name: string,
  age?: number // 可选属性
}

const tom: Person = {
  id: 13,
  name: 'Tom'
};

tom.age = 18;
tom.id = 1; // error: can't assign to 'id' because it is a read-only property
console.log(tom);
