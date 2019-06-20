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