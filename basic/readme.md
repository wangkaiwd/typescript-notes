## 基础
### 原始数据类型
#### 1. 布尔值
> `TypeScript`中，`boolean`是`JavaScript`中的基本类型，而`Boolean`是`JavaScript`中的构造函数，其它基本数据类型也一样（除`null`和`undefined`）

* 使用`boolean`定义布尔值类型：  
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

#### 2. 数值
* 使用`number`定义数值类型：  
  ```typescript
  let decLiteral:number = 6;
  let notANumber:number = NaN;
  let infinityNumber:number = Infinity
  ```
#### 3. 字符串
* 使用`string`定义字符串类型：  
  ```typescript
  let myName: string = 'Tom';
  ```

#### 4. 空值
* 用`void`表示没有任何返回值的函数  
  ```typescript
  function alertName():void{
    alert('my name is Tome')
  }
  ```
  
#### 5. `null`和`undefined`
* 使用`null`和`undefined`来定义：  
  ```typescript
  let u: undefined = undefined;
  let n: null = null;
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
### 函数的类型
* 函数声明
  ```typescript
   // javascript
  function sum(x,y) {
    return x + y;
  }
  // typescript
  // 我们要为函数的参数以及返回值指定类型
  function sum(x:number, y:number):number {
    return x + y;
  }
  ```
* 函数表达式
  ```typescript
  // javascript
  const mySum = function(x,y) {
    return x + y;
  }
  // typescript
  // 下边代码其实是简写方式
  // 这里只是定义了 "=" 右侧匿名函数的参数与返回值类型，而左侧的变量mySum是通过类型推断出来的，并没有进行明确指定
  const mySum = function(x:number, y:number):number {
    return x+y;
  }
  // 完整定义方式：
  const mySum: (x:number,y:number) => number = function(x:number,y:number):number {
    return x + y;
  }
  // 这里容易和箭头函数混淆，改写为es6箭头函数是这样的：
  const mySum: (x:number,y:number) => number = (x:number,y:number):number => {
    return x + y;
  }
  ```
* 用接口定义函数的形状
  ```typescript
  interface SearchFunc {
    (source: string, subString: string): boolean
  }
  const mySearch: SearchFunc = (source: string, subString: string) => {
    return source === subString;
  };
  mySearch('1', '2');
  ```
* 可选参数
  ```typescript
  // 要注意可选参数必须要在必须参数的后面，否则在参数没有传的情况下，会导致形参和实参的对应出错
  // 这点和javascript中只能有末尾的参数可以省略，否则只能用undefined补齐类似
  const getFullName = (lastName: string, firstName?: string) => {
    if (firstName) {
      return firstName + ' ' + lastName;
    }
    return lastName;
  };
  // 这时候我们只传一个参数的话: getFullName('Jon')，并不能清楚传入的是firstName还是lastName
  // const getFullName = (firstName?: string, lastName: string,) => {
  //   if (firstName) {
  //     return firstName + ' ' + lastName;
  //   }
  //   return lastName;
  // };
  getFullName('Yue', 'Jon');
  ```
* 参数默认值

* 剩余参数

* 函数重载