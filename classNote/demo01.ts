// 类是高配版的接口

class Human {
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
console.log('human', human1);
export {};
