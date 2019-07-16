## 数据类型
这里我们以`JavaScript`为基础来讲一下`TypeScript`的数据类型：  
`js`7种数据类型 + any + 元祖 + 枚举 + void + never

### `js`中原有的数据类型
> 由于`Symbol`我们并不常用，所以这里只讲到`js`的6种数据类型
 
我们先简单演示一下`js`中有的数据类型在`ts`中的写法：  
```typescript
// null 和 undefined
const delta1: null = null;
const delta2: undefined = undefined;

// number:
const delta3: number = 1;

// string:
const delta4: string = 'string';

// boolean
const delta5: boolean = true;

// object
const delta6: object = { name: 'Dog' };
//null undefined 1 string true { name: 'Dog' }
// array
// 写法1：
const delta7: string[] = ['1','2','3'];
// 写法2：
const delta8: Array<string> = ['1','2','3'];
console.log(delta1, delta2, delta3, delta4, delta5, delta6, delta7, delta8);
```

### 任意值`any`

先看下面一段代码：  
```typescript
let n1: number = 1;
n1 = 'I am n1';
```
当去掉`n1`的类型时，也就是`js`代码，这里是可以运行成功的。而当我们使用`ts`时，这里会提示我们：不能将`string`类型赋值给`number`类型。这也是`ts`语言的一大特点：**一旦你为某一个变量指定了类型，那么它的类型将永远无法修改**。 

但是有些时候，我们确实想要要在使用的过程对变量进行类型的更改该怎么办呢？这里就需要用到`any`类型：  
```typescript
let n2: any = 1;
console.log(typeof n2); // number
n2 = 'I am n2';
console.log(typeof n2); // string
```

简单来讲，如果你想让一个变量的类型可以变来变去的话，那就可以使用`any`类型

### `void`
`void`表示没有任何类型，当一个函数没有返回值的时候，我们可以为其指定返回值为`void`:  
```typescript
function fn():void {
  console.log('I am not return value');
}
```

### 类型转换
`js`中有类型隐式转换的问题，我们来看如下代码：
```typescript
let a = 123;
a = a + '';
console.log(typeof a) // string
a = a - 1;
console.log(typeof a, a) // number 122
```
在代码执行过程中`js`进行了2次数据类型的转换，可我们并不知道。  

在`ts`中这种情况是并不允许的，我们必须进行明确的数据类型转换，并需要一个新的变量来接收新的数据类型：  
```typescript
let a: number = 123;
let newA: string = String(a);

console.log('number => string', a, newA);

let b: string = '123';
let newB: number = Number('123');
console.log('string => number', b, newB);

let c: number = 1;
let newC: boolean = Boolean(c);
console.log('number => boolean', c, newC);

let d: object = { name: 'wangkaiwd', age: 18 };
let newD: string = JSON.stringify(d);

console.log('string => object', d, newD);
```
这样写了之后可以很明确的看到类型之间相互转换的过程，而不会被偷偷进行转换。

### 枚举
在学习枚举之前，我们假设要定义一个变量来表示人类的性别，代码大概是下面这样：  
```typescript
// let gender: string = 'women';
let gender: string = 'man';
```
如果在书写的过程中我们不小心将`women`和`man`拼错了，程序并不会立即提示，而是会在执行时的报错。

当我们学习了`ts`之后，我们可以通过枚举来指定变量的类型: 
```typescript
enum Gender {
  Women = 'women',
  Man = 'man'
}
// let gender: Gender = Gender.Man;
let gender: Gender = Gender.Women;
console.log(gender);
```
这样当我们指定`Gender`定义之外的内容的时候就会提示错误，很好的约束了我们的代码

### 类型断言
在有些时候，我们会比`ts`更加清楚我们定义的变量的类型，我们可以将该变量断言为**比它现有类型更确切的类型**。  
> 在断言的时候我们也不可以胡乱断言，我们要比`ts`提供的类型范围更小，否则`ts`依旧会报错
```typescript
const something: any = '123';
// 我们将其断言为更准确的类型
// '<>' 语法
// console.log((<string>something).split(''));
// 'as' 语法: 在`tsx`中只能使用as语法
console.log((something as string));
```
这里再为大家分享一个小技巧: 非空断言操作位符`!`。当我们明确知道一个变量的类型一定不是`null`或者`undefined`的时候，可以通过`!`操作符来告诉`ts`。


### 结语
有小伙伴可能发现，你怎么没有讲元祖和`never`呢？这是因为笔者的经验尚且，并有很好的运用过这俩个类型，当之后有了自己的见解后也会补充到文章中。
