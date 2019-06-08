## 快速开始
> 这里使用的是`mac`操作系统
### 编译第一个`.ts`文件
首先我们通过`yarn`全局安装`typescript`:  
```text
yarn global add typescript
```
这里会提示安装成功，之后我们新建`demo01.ts`:  
```typescript
const greeter = (person) => {
  return `Hello, ${person}`;
};
let person = 'wangkaiwd';

document.body.innerHTML = greeter(person);
```

之后我们在命令行上运行`TypeScript`编译器： 
```text
tsc demo01.ts
```
这里会提示`command not found`,这是因为在不同的操作系统上执行`yarn global`命令会出现一些问题，我用下面的方法成功安装：  
> `yarn global`没有执行成功的相关资料：  
> * [Yarn global command not working](https://stackoverflow.com/questions/40317578/yarn-global-command-not-working)
> * [global binaries don't install on mac os sierra](https://github.com/yarnpkg/yarn/issues/1321)

```text
yarn global bin

yarn config set prefix ~/.yarn

使用了zsh的用户要在.zshrc中添加全局路径
vim ~/.zshrc
export PATH="$PATH:`yarn global bin`"
```

执行上述代码之后保存退出`vim`模式，重新执行:  
```text
yarn global add typescript
tsc demo01.ts
```
这时代码会成功执行。

### 类型注解
> `TypeScript`里的类型注解是一种轻量级的为函数或变量添加约束的方式

我们希望`greeter`接收的参数为`string`类型：  
```typescript
// demo02.ts
const greeter = (person:string) => {
  return `Hello, ${person}`;
};
const person = [1,2,3]
greeter(person)
```
重新编译：  
```text
tsc demo02.ts
```
![typeError](./screenshots/typeError.png)

当我们参数的个数传递有问题时，`ts`代码也会报错。从这个`demo`中可以看到`TypeScript`比较强大的地方：  
* 可以分析传入参数的类型是否正确
* 可以分析传入参数的数量是否符合要求

不过虽然命令行提示`error`信息，但是代码还是被成功编译成了`js`。就算你的代码里有错误，你仍然可以使用`TypeScript`,但在这种情况下，`TypeScript`会警告你代码可能不会按预期执行。

### 接口
下面的例子中我们用接口来描述一个拥有`firstName`和`lastName`字段的对象： 
```typescript
interface Person {
  firstName: string,
  lastName: string
}

const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};

const person = {firstName: 'wang', lastName: 'kaiwd'};

greeter(person);
```

### 类
`TypeScript`支持`JavaScript`的新特性，我们使用`class`来改写这个例子：  
```typescript
class Student {
  fullName: string;
  // public会同时在实例上添加相应的属性： this.firstName = firstName; this.middleInitial = middleInitial; this.lastName = lastName
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}
interface Person {
  firstName: string,
  lastName: string
}
const greeter = (person: Person) => {
  return `Hello, ${person.firstName} ${person.lastName}`;
};
const person = new Student('Jane', 'M.', 'User');
greeter(person);
```

### 运行`TypeScript` `Web`应用
创建`index.html`: 
```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
<script src="./demo05.js"></script>
</body>
</html>
```
编译`demo05.ts`文件： 
```text
tsc demo05.ts
```
之后再浏览器中打开`html`文件  
![webApp](./screenshots/webApp.png)

到这里我们已经了解了一个简单的`TypeScript`应用如何编写，接下来我们需要对其中的细节再进行深入研究和应用。
