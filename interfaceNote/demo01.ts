// 接口是用来描述对象应该有哪些属性以及属性对应的类型
// const printName = (human: { name: string }) => {
//   console.log(human.name);
// };
// // 这里我们传入了很多属性，但是typescript只会检查必要的属性(label)是否存在，并且其类型是否匹配
// const human = { name: 'wangkaiwd' };
// printName(human);

// 用接口改写这个例子
interface Human {
  name: string;
}

const printLabel = (human: Human) => {
  console.log(human.name);
};

const human = { name: 'wangkaiwd' };
printLabel(human);
export {};
