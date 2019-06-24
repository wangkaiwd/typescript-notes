### 类型别名
类型别名用来给一个类型起一个新名字,常用于联合类型：  
```typescript
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver
function getName (n: NameOrResolver): Name {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}

console.log(getName('wangkaiwd'));
console.log(getName(() => 'wangkaiwd'));
```

### 字符串字面量类型
字符串字面量类型用来约束取值只能是某几个字符串中的一个： 
```typescript
type EventNames = 'click' | 'scroll' | 'mousemove';
const handleEvent = (ele: Element, event: EventNames) => {
  // doSomething
};
handleEvent(document.getElementById('hello'), 'click');
// error argument of dbclick is not assignable to parameter of type 'EventNames'
// handleEvent(document.getElementById('world'), 'dbclick');
```
