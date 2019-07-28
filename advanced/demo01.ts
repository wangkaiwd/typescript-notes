interface Person1 {
  name: string;
  age: number;
}

interface Person2 {
  name: string;
  gender: string
}

// 类型的且运算: 必须满足指定的俩个类型
const person1: Person1 & Person2 = {
  name: 'wangkaiwd',
  age: 12,
  gender: '男'
};

// 类型的或运算： 只要最少满足其中一个类型即可
const person2: Person1 | Person2 = {
  name: 'wangkaiwd',
  age: 12
};
export {};
