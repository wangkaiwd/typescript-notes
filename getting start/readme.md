## 快速开始
> 这里使用的是`mac`操作系统

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

