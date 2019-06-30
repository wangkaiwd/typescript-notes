## 基础语法
> 这里我们通过与`javascript`进行类比来学习会更容易一些

### 布尔值
> `TypeScript`中，`boolean`是`JavaScript`中的基本类型，而`Boolean`是`JavaScript`中的构造函数，其它基本数据类型也一样（除`null`和`undefined`）

使用`boolean`定义布尔值类型：  
```typescript
// 1. 直接定义
let isDone: boolean = false
// 2. 通过Boolean定义
let createByBoolean: boolean = Boolean(1)
// 3. 使用构造函数创建的对象不是布尔值
let createByNewBoolean: boolean = new Boolean(1) 
// error: Type 'Boolean' is not assignable to type 'boolean'.
let createByNewBoolean: Boolean = new Boolean(1) // 成功编译
```

### 数值
使用`number`定义数值类型：  
```typescript
let decLiteral:number = 6;
let notANumber:number = NaN;
let infinityNumber:number = Infinity
```
### 字符串
使用`string`定义字符串类型：  
```typescript
let myName: string = 'Tom';
```
  
### `null`和`undefined`
使用`null`和`undefined`来定义：  
```typescript
let u: undefined = undefined;
let n: null = null;
```
### 数组的类型
#### [类型+方括号]表示法
```typescript
const array: number[] = [1, 2, 3, 4, 5];
// array.push('8') // 在进行相关操作的时候也会进行类型校验
// const array1: number[] = [1, '2', 3, 4, 5]; // type 'string' is not assignable to type 'number'
```
#### 数组泛型
```typescript
// 使用数组泛型(Array Generic) Array<elemType>来表示数组
const array: Array<number> = [1, 2, 3, 4, 5];
```
#### 类数组
```typescript
// 类数组并不是数组类型，它们有自己单独的类型来进行定义和校验
// function sum () {
//   const args: number[] = arguments;
// }
function sum () {
  const args: IArguments = arguments;
}
// 类数组也可能会在dom操作中遇到，如 NodeList, HTMLCollection
```
### 空值
* 用`void`表示没有任何返回值的函数  
  ```typescript
  function alertName():void{
    alert('my name is Tome')
  }
  ```

### 任意值 
> 任意值(`any`)用来表示允许赋值为任意类型  

* `any`类型允许被赋值为任意类型：  
  ```typescript
  let myFavoriteNumber: string = 'seven';
  myFavoriteNumber = 7; // Type 'number' is not assignable to type 'string'
  // 使用any可以赋值为其它类型
  let myFavoriteNumber: any = 'seven';
  myFavoriteNumber = 7;
  ```
* 任意值的属性和方法(和`js`基本一样)：
  ```typescript
  let anyThing: any = 'hello';
  // 可以访问任意值的任何属性
  console.log(anyThing.myName)
  console.log(anyThing.myName.firstName)
  // 也可以调用任何方法
  console.log(anyThing.setName('Jerry').sayHello())
  ```
* 变量声明时未指定类型会被识别为任意类型：  
  ```typescript
  let something;
  something = 'seven';
  something = 7;
  // 等价于
  let something:any;
  something = 'seven';
  something = 7;
  ```
  
### 元祖
元祖类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。定义一对值分别为`string`和`number`的元祖：  
```typescript
// const 声明的变量不能改变值，这意味着，const 一旦声明变量就必须立即初始化，不能留到以后赋值
// 所以没有初始值的情况下只能使用let来定义
let array: [string, number];
// 元祖其实就是固定长度以及数组中元素类型的数组，可以使用数组的属性和方法
// 赋值
array = ['hello', 1];
// 访问值以及使用一些方法
console.log(array[0].slice(1), array[1].toFixed(2));
```

当我们访问一个越界（超过当前元祖定义的数组长度范围）的元素时，会使用联合类型来进行替代当前元素的类型： 
```typescript
let array: [string, number];
array = ['hello', 1];

array.push(2);
array.push('string');
// 当添加越界的元素时，它的类型会被限制为元祖中每个类型的联合类型（这里就是 string|number）
// true是boolean,并不属性string或者number
array.push(true); // Argument of type 'true' is not assignable to parameter of type 'string | number'
```

### `void`
某种程度上来说，`void`类型像是与`any`类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是`void`:  
```typescript
// es5
function doSomething1 (): void {
  console.log('this function no return value');
}
// es6
const doSomething2: () => void = () => {
  console.log('this function no return value');
};
```
声明`void`类型的变量没有什么大用，因为你只能为它赋值为`undefined`和`null`  
```typescript
let unusable: void = undefined;
```

### 枚举
```typescript

```

### `never`
`never`类型表示的是哪些永不存在的值的类型
  


