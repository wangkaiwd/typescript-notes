## 泛型

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

```
