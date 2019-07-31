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

### 索引类型查询操作符和索引访问操作符
这里我们通过一个获取对象属性值的例子来学习**索引类型查询**和**索引访问**操作符：  
```typescript
interface Person {
  name: string;
  age: number;
}
// 索引类型查询操作符： 对于任意类型T,keyof T的结果为T上已知的公共属性名的联合
// 索引访问操作符：T[K] 在这里表示person['name']具有类型Person['name']即string('age'同理)
const getValues = <T, K extends keyof T> (o: T, names: K[]): T[K][] => {
  // T => { name: string, age:number }
  // keyof T => 'name' | 'age'
  // K extends T => 'name' | 'age'
  // 为了防止o[name]是undefined,要确保names数组中的每一项都包含在o的属性中
  return names.map(name => o[name]);
};

// keyof Person是完全可以与 'name'|'age'互相替换的，不同的是当我们为Person添加了新的属性，keyof Person也会自动添加新的属性

// console.log(getValues({ name: 'wangkaiwd', age: 12 }, ['age', 'name'])); // [12,'wangkaiwd']
// 完整语法
getValues<Person, keyof Person>({ name: 'wangkaiwd', age: 12 }, ['age', 'name']);

const getValue = <T, K extends keyof T> (o: T, name: K): T[K] => {
  return o[name];
};
const person: Person = {
  name: 'ts1',
  age: 2
};
console.log(getValue(person, 'age')); // 2

type X = keyof Person; // X 的类型为 'name' | 'age'
```
上面的例子中有下面2个新语法：  
* `keyof T`
* `T[K]`

这就是我们要学习的索引类型查询和索引访问操作符。

对于任何类型`T`, `keyof T`表示`T`上的已知公共属性名的联合，在上面的例子中为`name|age`。相较于类型字面量，它会会在`T`的类型发生变化的时候也会跟随变化，更加灵活。

而`T[K]`相类似于我们在`JavaScript`中获取对象的属性值，只不过这里是获取对应属性值的类型。在上面的例子中类型有如下映射关系：  
* `person['name']` => `Person['name']`
* `person['age']` => `Person['age']`

### `Readonly`和`Partial`
`TypeScript`提供了从旧类型中创建新类型的一种方式 -- 映射类型。我们通过介绍2个比较常用的映射类型`Readonly`和`Partial`来学习部分内容。

下面是`Readonly`和`Partial`的代码演示：  
```typescript

```


