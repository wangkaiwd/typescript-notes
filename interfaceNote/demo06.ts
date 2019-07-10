interface Biology {
  think (): void;
}
interface Animal {
  // 函数声明
  sleep (): void;
}
// interface Human extends Animal {
//   name: string;
//   age: number;
// }

// 可以通过逗号分割来继承多个类
interface Human extends Animal, Biology {
  name: string;
  age: number;
}

const human: Human = {
  name: 'wangkaiwd',
  age: 12,
  sleep () {
    console.log('I am sleeping');
  },
  think () {
    console.log('I am thinking');
  }
};
human.sleep();
human.think();
export {};
