// 类是高配版的接口

class Human {
  // 静态属性: 只在类上拥有，由类构造出来的实例没有，并且通过[类名.属性名]的语法来直接调用
  static think: string = 'think';
  name: string;
  age: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say (): void {
    console.log('I am speaking');
  }
}

// new 的时候会执行constructor
const human1 = new Human('wangkaiwd', 12);
human1.say();
console.log(Human.think);
console.log('human', human1, human1.constructor);
export {};
