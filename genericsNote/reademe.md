## 泛型
泛型可以根据我们传入参数的类型来决定其它对应的相同类型参数的类型，我们可以将对应的类型参数替换成相应的指定的类型来帮助我们进行类型分析。
### 初步使用泛型
下面我们创建一个`returnIt`函数函数，这个函数会返回任何传入它的值，不使用泛型的话，我们可能会这样定义它：  
```typescript
const returnIt = (something: any): any => {
  return something;
};

returnIt('something');
```
这样写会存在一个问题，即使我们传入`number`但是返回一个`string`的元素，也是符合函数的类型定义的，这并不能很好的满足我们的需求：  
```typescript
const returnIt2 = (something: any): any => {
  return something.toString();
};

console.log(returnIt2(1)); // 1(字符串)
```
更好的实现这个函数的方法是使用泛型，下面是用泛型该写的例子：  
```typescript
// 这里的T是类型变量，它是一种特殊的变量，只用于表示类型而不是值
const returnIt3 = <T> (something: T): T => {
  return something;
};
```
接下来我们调用它：  
```typescript
// 调用方法一： 传入所有的参数，包括类型参数
console.log(returnIt3<string>('string'));
// console.log(returnIt3<string>(1)); // 这里在制定了类型参数后，传入参数的类型也会被指定

// 调用方法二： 利用类型推论，让编辑器帮助我们进行类型判断
console.log(returnIt3('string')); // 返回值类型为string
console.log(returnIt3(12)); // 返回值类型为number
```

### 泛型描述复杂数据类型
还是上边的例子，这次我们传入对象和数组来别看一下有什么不同：  
```typescript
const returnObject = <T> (something: T): T => {
  return something;
};
// 传入一个对象
// 通过接口来限制传入属性以及属性的类型
interface Human {
  name: string;
  age: number;
}
console.log(returnObject<Human>({ name: 'wangkaiwd', age: 12 }));

// 实现returnArray函数返回数组，并且数组中的每一项的类型为传入类型
const returnArray = <T> (something: T[]): T[] => {
  return something;
};

console.log(returnArray<number>([1, 2, 3, 4]));
```
可以看到，当使用了类型参数的时候，我们的类型也变得特别的灵活，就像普通参数一样可以层层传递

### 泛型类型
以上边示例中`returnArray`函数为例，它的完整类型书写如下：  
```typescript
// 上边函数的完整类型书写方式
const returnArrayFull: <T>(something: T[]) => T[] = <T> (something: T[]): T[] => {
  return something;
};
```
用对象和接口来描述对应的类型分别如下：  
```typescript

// 用对象来描述带有类型参数的函数类型
const returnArrayFull2: { <T> (something: T[]): T[] } = <T> (something: T[]): T[] => {
  return something;
};

// 用接口描述带有类型参数的函数类型
interface ReturnArrayFull3 {
  <T> (something: T[]): T[]
}
const returnArrayFull3: ReturnArrayFull3 = (something) => {
  return something;
};
```
这里我们将之前函数类型、对象类型和接口类型与类型参数结合，来表示泛型类型。

### 泛型约束
有时候，我们想通过泛型来操作某一类的一组值。比如我们只想操作有`length`属性的元素：  
```typescript
interface HasLength {
  length: number
}
// 使用类型变量继承对应的接口，则传入的参数被限制为必须要有length属性
const returnHasLengthElement = <T extends HasLength> (something: T): T => {
  console.log(something.length);
  return something;
};
// 12对应的number类型没有length属性
// returnHasLengthElement(12) // TS2345: Argument of type '12' is not assignable to parameter of type 'HasLength'

// 字符串是有length属性的
console.log(returnHasLengthElement('12')); // 12 字符串
```
这样在我们调用函数的时候，传入的参数必须要有指定的属性，否则就会出现错误提示
