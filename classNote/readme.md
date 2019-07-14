## `TypeScript`中的类

### 继承

### 修饰符

#### 参数属性
参数属性可以方便地让我们在一个地方定义并初始化一个成员

### 存取器
我们可以通过在`class`的方法前添加`set`和`get`关键字来控制对对象成员的访问和赋值，这样可以在开发者进行设置值和赋值的时候可以进行一个逻辑处理：  
```typescript
class Human {
  private _age: number;

  constructor (public name: string, age: number) {
    this.age = age;
  }

  get age (): number {
    return this._age;
  }

  set age (newAge: number) {
    if (newAge < 0) {
      console.warn('年龄不能小于0');
      this._age = 0;
    } else {
      this._age = newAge;
    }
  }

  say (): void {
    console.log(`I am speaking`);
  }
}
const human = new Human('wagkaiwd', 12);
human.age = -1;
console.log('human', human);
```
这里我们定义一个私有属性`_age`来作为`set/get`的依赖值，最终提供`age`属性来让开发者使用。而在使用和赋值的过程中，我们通过`set/get`对应的方法在开发者将年龄改为负数时更改为0并作出警告，确保了年龄的正确性。
