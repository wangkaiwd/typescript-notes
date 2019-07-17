// abstract 关键字用来定义抽象类以及抽象类中的方法
abstract class Animal {
  // 抽象类中的抽象方法不包含具体实现，只定义类型
  abstract makeSound (): void;

  move (): void {
    console.log(`I am moving`);
  }
}
// 不能使用抽象类创建实例
// const animal = new Animal(); //TS2511: Cannot create an instance of an abstract class.
class Human extends Animal {
  constructor (public name: string, public age: number) {
    super();
  }

  // 子类Human必须实现父抽象类中的抽象方法
  makeSound (): void {
    console.log('来自天堂的魔鬼');
  }
}

const human = new Human('wangkaiwd', 12);
human.makeSound();

export {};
