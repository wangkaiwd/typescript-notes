interface Human {
  name?: string;
  age?: number;
  readonly gender: string;
}
// 可选属性的好处：
//    1. 对可能存在的属性进行预先定义，可以让开发者更加清楚的直到哪些参数可能会不传
//    2. 当我们使用接口中不存在的对象属性时候会有错误提示，而不是得到undefined
const printNameOrAge = (human: Human) => {
  let newHuman: Human = { gender: 'woman' };
  // 只读属性不可以重新赋值来改变
  // human.gender = 'woman';
  if (human.name) {
    newHuman.name = human.name;
  }
  if (human.age) {
    newHuman.age = human.age;
  }
  console.log(newHuman);
};
const human = { name: 'wangkaiwd', age: 12, gender: 'man' };
printNameOrAge(human);
