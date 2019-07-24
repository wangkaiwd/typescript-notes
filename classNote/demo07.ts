class Human {
  // private name: string;
  // public age: number;
  // readonly gender: string;
  //
  // constructor (name: string, age: number, gender: string) {
  //   this.name = name;
  //   this.age = age;
  //   this.gender = gender;
  // }

  // 上面的写法等价于
  constructor (private name: string, public age: number, readonly gender: string) {

  }

  say (): void {
    console.log('I am speaking');
  }
}

const human = new Human('wangkaiwd', 12, '男');
console.log(human.age);
human.say();
// name是私有属性，只能在class Human内使用
// console.log(human.name); // TS2341: Property 'name' is private and only accessible within class 'Human'.
// 不能为gender分配值，因为它是一个只读属性
// human.gender = '女'; // TS2540: Cannot assign to 'gender' because it is a read-only property.

export {};
