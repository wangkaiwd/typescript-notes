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
console.log(delta1, delta2, delta3, delta4, delta5, delta6);
```

### 任意值`any`

