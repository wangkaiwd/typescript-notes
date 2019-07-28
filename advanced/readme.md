## `TS`高级类型

### `TS`中类型的且运算(`intersection type`)和或运算(`union type`)
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
* `&`表示且运算，必须要满足所有指定的类型，也叫交叉类型
* `|`表示或运算，只要满足指定类型中的一个即可，也叫联合类型

### 类型别名
类型别名其实就是给类型起了一个新的名字，这样的好处是可以在下次使用的时候可以直接使用别名，不用再写很长的类型。其次，我们可以为类型定义一个语义化的别名，增加了代码的可读性。下面是类型别名的例子：  
```typescript
type Name = string;
type NameHandle = () => string;
type NameOrNameHandle = Name | NameHandle;

const getName = (n: NameOrNameHandle): Name => {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
};
```
可以看到这里的类型别名提高了类型的可读性，并且将联合类型用一个别名来表示，会节省一定的代码量

我们也可以在类型别名中使用泛型：  
```typescript
// 类型别名中使用泛型：
type Container<T> = { value: T }
```

类型别名和接口并不一样：  
```typescript
// 类型别名和接口
type Alias = { num: number }
interface Interface {
  num: number;
}
```
类型别名其实只是为对象字面量重新起了一个名字而已，并不会具有接口的诸如继承(`extends`)和实现(`implements`)等特性

### 类型字面量
字面量类型可以让我们为变量指定一个固定的值，它可以很好的和类型别名结合使用：  
```typescript
// 简单数据类型
type LiteralType1 = 1 | 2 | 'not a number' | false
// 对象
type LiteralType2 = {
  gender: '男' | '女'
}

// 函数: 参数只能是LiteralType1指定中的某一个
const getNumber = (n: LiteralType1): void => {

};
// 数组: 数组中每一项的类型必须符合LiteralType1中的某一个
const array: LiteralType1[] = [1, 2, false];

// 接口
interface LiteralType3 {
  direction: 'up' | 'down' | 'left' | 'right'
}
```
上边的代码演示了类型字面量和常用类型的结合使用，可以看到类型别名可以帮助我们可以更好的缩小变量类型的取值范围，提升代码的严谨性。
