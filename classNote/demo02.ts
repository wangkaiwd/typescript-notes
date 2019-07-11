class Animal {
  move (): void {
    console.log('I am moving');
  }
}

class Human extends Animal {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    super();
    this.name = name;
    this.age = age;
  }

  say (): void {
    console.log('I am speaking');
  }
}

const human1 = new Human('wangkaiwd', 12);
// 可以直接调用继承自Animal中的方法
human1.move();

export {};
