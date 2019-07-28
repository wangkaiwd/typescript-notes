## `TypeScript`学习手记
> 记录了自己从零开始学习`TypeScript`的学习历程,希望能在时间流逝中留下些许痕迹

最近有在论坛看到国外的大神使用`react hooks`只做了一个计算器：  
![react-calculator-twice.gif](https://i.loli.net/2019/07/25/5d3903b642d2728487.gif)

* [源码地址](https://github.com/jarodburchill/CalculatorReactApp)
* [原文地址](https://www.reddit.com/r/reactjs/comments/cgcvns/i_made_a_calculator_in_react_the_other_day/)

看到之后，也决定用自己正在学习的`TypeScript`来制作一个计算器，实际效果大概如下：
![](https://raw.githubusercontent.com/wangkaiwd/drawing-bed/master/ts-calculator-tiny.gif)

* [源码地址](https://github.com/wangkaiwd/typescript-notes/blob/master/practice/demo04.ts)
* [预览地址](https://wangkaiwd.github.io/typescript-notes/practice/index.html)
### 基础知识
> 参考资料：
>
> * [`TypeScript`官方文档](https://www.tslang.cn/docs/home.html)
> * [`TypeScript`入门教程](https://ts.xcatliu.com/)

笔者学习笔记整理： 

* [快速开始](https://github.com/wangkaiwd/typescript-notes/blob/master/getting%20start/readme.md)
* [数据类型](https://github.com/wangkaiwd/typescript-notes/blob/master/dataTypes/readme.md)
* [接口](https://github.com/wangkaiwd/typescript-notes/blob/master/functionNote/readme.md)
* [类](https://github.com/wangkaiwd/typescript-notes/blob/master/classNote/readme.md)
* [案例实践](https://github.com/wangkaiwd/typescript-notes/blob/master/practice/readme.md)
* [函数](https://github.com/wangkaiwd/typescript-notes/blob/master/functionNote/readme.md)
* [泛型](https://github.com/wangkaiwd/typescript-notes/blob/master/genericsNote/reademe.md)


这里着重说一下，如果你是`React+TypeScript`开发者的话可以参考下边这个`git`仓库，里面涵盖了`React+TypeScript`以及`React Hooks`和`TypeScript`结合的相关知识，也对笔者的学习过程起到了极大的帮助：

* [`React+TypeScript`作弊表](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)

### 个人见解

学习到这里并没有结束，笔者最近也还在整理`TypeScript`项目实践笔记，笔记中遗漏的知识点(或者说自己也并没有理解的知识点)在之后随着学习的深入也会慢慢补充。

在使用了一段时间的`TypeScript`之后，笔者对于`TypeScript`的个人理解如下，当然这只是一些个人的简单见解

缺点：
  * 需要一定的学习成本，尤其对于没有接触过泛型、接口等概念的前端来说需要一些时间来理解
  * 代码书写过程难度增加，过程比较繁琐，一般的写法都是先写`js`,然后再添加对应的类型
  * 如果熟练度不够，可能并不能很好的描述一个类型，也容易滥用`any`，导致和`js`代码没什么区别，还浪费了书写时间
  
优点：  
  * 可以大大降低我们犯低级错误的概率(`null`和`undefined`的相关错误)
  * 类型特别明确，除了`any`类型外其它类型一旦声明就不可更改，使代码的可读性更好
  * 当为对应的元素添加了类型之后，也相当于为其写了一部分注释，极大的提升了代码的可阅读性，如果命名合理的话，也相当于节省了注释时间
  * 编辑器提示特别强大，直接可以通过类型定义来为我们进行对应内容的提示，开发体验较好
    
总的来说，我们可能会花费更多时间在编码的过程中，但是产出的质量，以及之后对函数或组件的维护和使用将会特别轻松。

### 结语
笔者将自己知道的和见到的都分享了出来，如果你也正在学习`TypeScript`并且文章对你有帮助的话，希望可以给笔者一个`star`，这将是对笔者最大的鼓励。

本文`github`仓库地址： [传送门](https://github.com/wangkaiwd/typescript-notes)




