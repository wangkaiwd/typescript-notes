## `TS`高级类型

### `TS`中类型的且运算和或运算
在`TypeScript`中，类型也可以进行**或运算**和**且运算**来灵活实现不同的类型定义，下面是一个简单的例子：  
```typescript
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
```
从上边的例子中可以知道：  
* `&`表示且运算，必须要满足所有指定的类型
* `|`表示或运算，只要满足指定类型中的一个即可

### 类型别名和类型字面量
类型别名其实就是给类型起了一个新的名字，这样的好处是可以在下次使用的时候可以直接使用别名，不用再写很长的类型。其次，我们可以为类型定义一个语义化的别名，增加了代码的可读性。下面是类型别名的例子：  
