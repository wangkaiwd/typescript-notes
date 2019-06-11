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
