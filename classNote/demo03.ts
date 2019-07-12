class Animal {
  // protected: 只可以在声明类及其子类中访问
  protected gender: string;

  constructor (gender: string) {
    this.gender = gender;
  }
}
class Human extends Animal {
  // 在TypeScript中，成员都默认为public，可以被自由的访问
  // public name: string;
  // public age: number;
  // 只读属性必须在声明时或构造函数里被初始化
  readonly name: string;
  age: number;
  // private: 当成员被标记private时，它就不能在声明它的类的外部访问
  private secret: string;

  // public constructor() {...}
  constructor (name: string, age: number) {
    super('男');
    this.name = name;
    this.age = age;
    this.secret = '保守秘密';
  }

  // public say () {...}
  say (): void {
    console.log(`my gender is ${this.gender}`);
  }
}

const human = new Human('wangkaiwd', 12);
human.say();
// human.gender; // error, gender只能在Animal和它的子类中访问
// console.log('secret', human.secret);// error, secret属性只有在Human内部才能访问
// human.name = 'Tom'; 只读属性不能进行赋值

export {};
