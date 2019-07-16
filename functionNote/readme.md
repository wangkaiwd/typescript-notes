## `TypeScript`函数
`TypeScript`是`JavaScript`的超集，所以这里`TypeScript`包含新旧版本的所有`JavaScript`相关语法
### 为函数定义类型
在`JavaScript`中，函数一般有以下几种声明方式：  
* 函数声明(具名函数)
* 函数表达式(匿名函数)
* 箭头函数(`es6`新语法)

下面是这几种函数在`TypeScript`中的书写方式：  
```typescript
// 函数声明
function fn1 (x: number, y: number): number {
  return x + y;
}

// 函数表达式
const fn2 = function (x: number, y: number): number {
  return x + y;
};

// 完整函数类型
const fullFn2: (x: number, y: number) => number = function (x: number, y: number): number {
  return x + y;
};

// 箭头函数
const fn3 = (x: number, y: number): number => {
  return x + y;
};

// 完整函数类型
// 在函数和返回值类型之间使用(=>)符号，这里要注意，容易与箭头函数的=>符号混淆
const fullFn3: (x: number, y: number) => number = (x: number, y: number): number => {
  return x + y;
};
```
这里要留意箭头函数的写法，在`TypeScript`中使用函数表达式声明函数类型时，函数和返回值类型之间使用`=>`进行连接，容易和箭头函数的`=>`产生混淆。

在上面的代码中我们可以发现，函数类型包含俩部分：  
* 参数类型
* 返回值类型

如果一个函数没有返回值的话，我们可以为返回值指定`void`类型：  
```typescript
// 如果函数没有任何返回值，需要指定返回值类型为void
const fn4 = (x: number, y: number): void => {
  console.log(x + y);
};
```
### 可选参数、默认参数、剩余参数
`TypeScript`中函数的每个参数都是必须的，并且参数类型也要一一对应，而有很多情况函数的参数是选传的，在`TypeScript`中的语法如下：  
```typescript
const add = (x: number, y?: number) => {
  // y没有传入的时候只返回x,传入y的时候返回x+y
  return y ? x + y : x;
};
console.log(add(1)); // 1
```
`es6`中也支持函数默认值，`TypeScript`中这样为参数指定默认值：  
```typescript
// 指定默认值
const add2 = (x: number = 10, y?: number) => {
  return y ? x + y : x;
};
console.log(add2()); // 10
```
可选参数只能在参数最后面，如果在前边的话，当可选参数不传的时候实参和形参会无法对应

在`es6`中函数还有一个重要的概念：剩余参数，它会将实参中传入但没有在形参中接受的参数组成一个数组来让开发者操作，在`TypeScript`中它的使用方式如下：
```typescript
// 剩余参数
const sum = (firstNumber: number, ...restNumbers: number[]) => {
  let result: number = firstNumber;
  restNumbers.forEach(item => result += item);
  return result;
};
console.log(sum(2, 3, 4, 5, 6)); // 20
```
从上面的代码中可以看出，剩余参数会组成一个数组，所以我们可以用数组的类型来指定剩余参数的类型

### `this`参数
在`TypeScript`中我们可以为函数里的`this`指定类型
```typescript
interface Human {
  name: string;
  age: number;
}
// this参数是假的，只是用来指定函数中this的类型
const fn = function (this: Human, x: number, y: number): number {
  console.log(this, x + y);
  return x + y;
};
// 不能将void类型分配给为Human类型的this
// fn(1, 2); //TS2684: The 'this' context of type 'void' is not assignable to method's 'this' of type 'Human'.
fn.call({ name: 'wangkai', age: 12 }, 2, 1);
```
在指定了`this`的类型之后，不符合`this`类型的函数调用`TypeScript`会进行错误提示

### 重载
在`JavaScript`中函数是不支持重载的，而在`TypeScript`中我们可以通过重载可以实现根据传入不同的参数而返回不同类型的数据：  
```typescript
function add (x: number, y: number): number;
function add (x: string, y: string): string;
// function add (x:any,y:any): any 并不是重载列表的一部分
function add (x: any, y: any): any {
  return x + y;
};
// 我们希望传入的参数都是number或都是string
console.log(add(1, 2));
console.log(add('1', '2'));
// 函数参数类型不同时会提示错误信息
// console.log(add('1', 2)); // TS2345: Argument of type '2' is not assignable to parameter of type 'string'.
```
要注意的是这里只有俩个重载： 
* 接收2个数字
* 接受2个字符串
