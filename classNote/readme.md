## `TypeScript`中的类
类也是用来描述一个对象的属性以及属性的类型，相比于接口，类在类型的基础上还会为对应的属性赋值、为对应的方法添加实现细节。换句话说，类就是高配版的接口。
### 继承
`TypeScript`使用`JavaScript`中的最新语法，和接口一样可以通过`extends`关键字来实现类的继承：  
```typescript
class Animal {
  move (): void {
    console.log('I am moving');
  }
}

class Human extends Animal {
  name: string;
  age: number;

  constructor (name: string, age: number) {
    // 通过super来调用父类的constructor,而且一定要在访问this之前调用
    super();
    this.name = name;
    this.age = age;
  }

  say (): void {
    console.log('I am speaking');
  }
}

const human1 = new Human('wangkaiwd', 12);
// 可以直接调用继承自Animal中的方法
human1.move();
```
这里需要注意的是，类继承除了要使用`extends`关键字之外，还需要在子类的构造函数中调用`super`,而且必须在访问`this`属性之前调用。

### 静态属性
类的静态属性存在于类本身上面，而不是存在于类的实例上面：  
```typescript
class Human {
  name: string;
  age: number;
  static think: string = '思考人生';

}
const human = new Human();
// console.log(human.think);//TS2576: Property 'think' is a static member of type 'Human'
// 要通过类名来直接调用
console.log(Human.think); // 思考人生
```
可以看到我们会通过`static`关键字来定义静态属性，而且只能通过`[类名.属性名]`的方式来访问，直接在实例上访问会有错误提示

### 修饰符
在`TypeScript`中，主要有以下几种成员修饰符：  
* `private`: 只能在声明它的类中进行访问
* `public`：成员变量的默认修饰符，在它的声明类以及子类和实例对象中都可以随意访问
* `protected`：只能在声明它的类及其子类中进行访问
* `readonly`: 初始化后将不能被修改

下面是这几种修饰符的用法案例：
```typescript
class Animal {
  // protected: 只可以在声明类及其子类中访问
  protected gender: string;

  constructor (gender: string) {
    this.gender = gender;
  }
}
class Human extends Animal {
  // 在TypeScript中，成员都默认为public，可以被自由的访问
  // public name: string;
  // public age: number;
  // 只读属性必须在声明时或构造函数里被初始化
  readonly name: string;
  age: number;
  // private: 当成员被标记private时，它就不能在声明它的类的外部访问
  private secret: string;

  // public constructor() {...}
  constructor (name: string, age: number) {
    super('男');
    this.name = name;
    this.age = age;
    this.secret = '保守秘密';
  }

  // public say () {...}
  say (): void {
    console.log(`my gender is ${this.gender}`);
  }
}

const human = new Human('wangkaiwd', 12);
human.say();
// human.gender; // error, gender只能在Animal和它的子类中访问
// console.log('secret', human.secret);// error, secret属性只有在Human内部才能访问
// human.name = 'Tom'; 只读属性不能进行赋值
```

可以看到`TypeScript`的`class`相较于`JavaScript`的构造函数来说，更多的是提供了一些关键字来代表不同的语法含义，从而实现各种功能

#### 参数属性
参数属性可以方便地让我们在一个地方定义并初始化一个成员，让我们少敲几次键盘，可以更快的定义类里的成员变量：  
```typescript

```

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

### 抽象类
抽象类可以这样理解：  
* 爸爸类：专门当别的类的爸爸的类
* 没有写完的类： 抽象方法没有完全实现(由于类没有写完，所以不能创建出对象)

抽象类作为其它类的父类使用，它可以像接口一样在类中定义抽象方法，该方法只有类型没有实现细节：  
```typescript
// abstract 关键字用来定义抽象类以及抽象类中的方法
abstract class Animal {
  // 抽象类中的抽象方法不包含具体实现，只定义类型
  abstract makeSound (): void;

  move (): void {
    console.log(`I am moving`);
  }
}
// 不能使用抽象类创建实例
// const animal = new Animal(); //TS2511: Cannot create an instance of an abstract class.
class Human extends Animal {
  constructor (public name: string, public age: number) {
    super();
  }

  // 子类Human必须实现父抽象类中的抽象方法
  makeSound (): void {
    console.log('来自天堂的魔鬼');
  }
}

const human = new Human('wangkaiwd', 12);
human.makeSound();
```

总结一下，抽象类大概有一下几个知识点：  
* 抽象类作为其它类的父类使用，不能生成实例
* 通过`abstract`关键字来定义抽象类和抽象类中的抽象方法
* 抽象类中的抽象方法和接口中定义的方法相同，只有类型，没有实现细节
* 子类在继承抽象类的时候，必须要实现抽象方法
