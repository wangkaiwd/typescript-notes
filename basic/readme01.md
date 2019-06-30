### 类型断言
类型断言(Type Assertion)可以用来手动指定一个值的类型，它的语法如下：  
```text
<类型>值  或   值 as 类型
```

下面是一个例子：将一个联合类型的变量指定为一个更加具体的类型
```typescript
// 使用联合类型实现
const getLength = (something: number | string) => {
  if (typeof something === 'string') {
    return something.length;
  } else if (typeof something === 'number') {
    return something.toString().length
  }
}

// console.log(getLength('wangkaiwd'))

// 使用断言实现
const getLength = (something: string | number) => {
  // if(something.length) {
  // 要注意这里要通过括号将类型和值括起来(<string>something)
  if ((<string>something).length) {
    // 使用as语法实现
    return (something as string).length
  } else {
    return something.toString().length
  }
}
console.log(getLength(1234))
// 注意：在jsx中只支持as语法

// 类型断言不是类型转换，断言成一个联合类型中不存在的类型是不允许的
// const toBoolean = (something: string | number) => {
//   return <boolean>something // error
// }
```

### 声明文件

#### 声明语句
#### 声明文件
#### 第三方声明文件
推荐通过`@types`统一管理第三方库的声明文件：  
```typescript
// 以jquery为例：
yarn add @types/jquery
```

### 类型推断
> 如果没有明确的指定类型，那么`TypeScript`会依照类型推论(`Type Inference`)的规则推断出一个类型

我们来对比下边的代码： 
```typescript
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// error: Type 'number' is not assignable to type 'string'

// 上边的代码等价于
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;
```
`TypeScript`会在没有明确的指定类型的时候推测出一个类型，而在定义的时候如果没有赋值，就会被推断为`any`类型而完全不被类型检查：  
```typescript
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7
```

### 联合类型(`Union Types`)
> 联合类型可以表示取值可以为多种类型中的一种

* 联合类型使用`|`分隔每个类型： 
  ```typescript
  // 允许myFavoriteNumber的类型是 string 或 number,不允许其它类型
  let myFavoriteNumber: string | number;
  myFavoriteNumber = 'seven';
  myFavoriteNumber = 7;
  ```

* 访问联合类型的属性或方法
  > 当`TypeScript`不确定一个联合类型的变量到底是哪个类型的时候，我们只能**访问此联合类型的所有类型里共有的属性或方法**
  ```typescript
  function getLength(something:string|number):(number|string){
    // return something.length // error, number no length prop
    return something.toString(); // ok: both number and string has toString method 
  }
  ```
  
### 接口
> 在`TypeScript`中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于[对象形状(shap)]的描述

这里我们先用接口来描述对象的形状，在进阶章节再学习对类进行抽象。下面是一个例子：  
```typescript
interface Person {
  readonly id: number, // 只读属性
  name: string,
  age?: number // 可选属性
}

const tom: Person = {
  id: 13,
  name: 'Tom'
};

tom.age = 18;
tom.id = 1; // error: can't assign to 'id' because it is a read-only property
console.log(tom);
```

了解了接口的初步概念之后，我们用它来描述一个复杂的对象：  
```typescript
interface ThinkProp {
  most: string,
  secondary: string
}
interface HobbyProp {
  id: number;
  item: string;
}
interface PersonProp {
  name: string;
  age: number;
  run(): void;
  eat(a: string, b: string): void;
  hobby: Array<HobbyProp>;
  think: ThinkProp;
}
const object: PersonProp = {
  name: 'wangkai',
  age: 18,
  run: function () {
    console.log('run')
  },
  eat: function (a, b) {
    console.log(`eat ${a} and ${b}`)
  },
  hobby: [{ id: 1, item: 'hobby1' }, { id: 2, item: 'hobby2' }],
  think: { most: 'life', secondary: 'others' }
}
console.log('object', object)
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
  ```typescript
  // ts会将添加了默认值的参数识别为可选参数
  // 这里我们为firstName指定默认值
  const buildName = (firstName: string = 'Tom', lastName: string) => {
    return firstName + ' ' + lastName;
  }

  // 调用的时候如果参数要是用默认值的话，必须传入undefined
  console.log(buildName(undefined, 'Cat'))
  ```

* 剩余参数
  ```typescript
  // 这里的剩余参数...items是数组，可以用数组类型来表示
  const push = (array: any[], ...itmes: any[]) => {
    itmes.forEach(item => {
      array.push(item)
    })
    return array
  }

  console.log(push([1, 2], 3, 4, 5)) // [1,2,3,4,5]
  ```
