## 声明文件

### 如何使用类型声明文件
当我们把`TypeScript`编译成`JavaScript`文件的时候，类型声明会丢失。所以我们需要提供一个`.d.ts`文件来让`TS`使用者使用我们的`js`文件的时候可以知道对应的类型。

使用其他开发者写好的类型声明文件有一下俩种方式：
* 使用社区定义的类型声明问文件： [`DefinitelyTyped`](http://definitelytyped.org/)
* 使用第三方库自定的类型定义

`DefinitelyTyped`是一个高质量的`TypeScript`类型声明仓库，这里有优秀的第三方类型声明文件让我们使用。

比如我们使用`React`的类型声明文件的话，要安装`@types/react`依赖：  
```npm
yarn add @types/react -D
```

有些库本来就是用`TypeScript`来实现的，就可以将类型声明文件和代码放到一起让开发者使用。

### 如何写类型声明文件
我们先写一段`TypeScript`代码：  
```typescript
interface Person {
  name: string;
  age: number;
}

const printPerson = (person: Person) => {
  console.log(person);
};
export default printPerson;
```
声明文件最简单的书写方式是通过`tsc`命令来自动生成：  
```npm
npx tsc demo01.ts -d 
```
只要在命令后加入`-d`参数，就会为对应的`.ts`结尾文件生成`.d.ts`类型声明问文件:  
```typescript
interface Person {
    name: string;
    age: number;
}
declare const printPerson: (person: Person) => void;
export default printPerson;
```
这个问件只有类型声明，没有细节实现，它会自动为当前同级目录相同文件名的`.js`文件提供类型。

当然在实际工中我们会使用`webpack`来进行项目开发，它可以配置声明文件生成的位置，并且和自己的项目一起打包。当然我们需要做如下工作:  
* 在`tsconfig.json`中配置`outDir`目录来设置`.d.ts`声明文件生成的位置
* 在`package.json`中需要添加`types`字段：  
    ```json
    {
      "type": "./demo01.d.ts"
    }
    ```

这样我们实现的库文件在被`TypeScript`开发者使用的时候就会自己提供类型声明文件，而不用在`DefinitelyTyped`中进行额外安装。

不过有时候我们需要为一些已经写好的`JavaScript`代码提供类型声明文件，来让它可以在被`TypeScript`文件中使用时拥有类型。

最简单的做法是这样的：在`.js`文件同级目录结构下建立`.d.ts`文件声明类型：  
 

    
