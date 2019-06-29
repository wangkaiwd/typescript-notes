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

### 类与接口
这里我们学习接口的另一个用途，对类的一部分行为进行抽象：  

#### 类实现接口
不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口(`interfaces`)。用`implements`关键字来实现。这个特性大大提高了面向对象的灵活性。
```typescript
interface Alarm {
  size: number,
  name: string,

  alert (): void;
}
interface Light {
  lightOn (): void;

  lightOff (); // 函数定义可以不指定返回值
}
class Door {}

class SecurityDoor extends Door implements Alarm {
  size = 20;
  name = 'securityDoor';

  alert () {
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  size = 10;
  name = 'car';

  alert () {
    console.log('Car alert');
  }
}

class AdvancedCar implements Alarm, Light {
  size = 40;
  name = 'advancedCar';

  alert () {
    console.log('AdvancedCar alert');
  }

  lightOff () {}

  lightOn () {

  }
}
const securityDoor = new SecurityDoor();
securityDoor.alert();

const car = new Car();
car.alert();
```

#### 接口继承接口
接口与接口之间是可以相互继承的：  
```typescript
interface Alarm {
  size: number;
  name: string;

  alert (): string;
}

// LightbaleAlarm不仅有Alarm的类型，还有自己添加的一些类型
interface LightableAlarm extends Alarm {
  lightOn (): number;

  lightOff (): boolean;
}

class Car implements LightableAlarm {
  size = 10;
  name = 'car';

  alert () {
    return 'car alert';
  }

  lightOff () {
    return true;
  }

  lightOn () {
    return 111;
  }
}

const car = new Car();
// Car { size: 10, name: 'car' } car alert true 111
console.log(car, car.alert(), car.lightOff(), car.lightOn());
```

#### 接口继承类
接口也可以继承类，它会继承类的成员但不包括其实现。就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
```typescript
// 接口继承类
class Point {
  x: number;
  y: number;
}

// 接口继承类
interface Point3d extends Point {
  z: number;
}

const point3d: Point3d = { x: 1, y: 2, z: 3 };

console.log(point3d);
```
#### 混合类型
接口能够描述`javascript`里丰富的类型:
```typescript
// 通过接口来定义函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

mySearch = (source, subString) => {
  return source.indexOf(subString) > -1;
};

// 有时候我们也可以为函数定义自己的属性和方法
interface Counter {
  (start: number): string;

  interval: number;
  // 赋值表达式
  // reset: () => void;
  // 函数声明
  reset (): void;
}
function getCounter (): Counter {
  // 这里的<Counter> 是什么意思？而且这里为什么只能使用普通函数
  let counter = <Counter>function (start) {

  };
  counter.interval = 123;
  counter.reset = function () {

  };
  return counter;
}
```

### 泛型
泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
```typescript
// 这样并没有准确的定义返回值的类型
// const createArray = (length: number, value: any): Array<any> => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// };

// 通过泛型来约束返回值的类型，这样返回值得类型就会和value传入的类型相同，准确的描述了返回值的类型
const createArray = <T> (length: number, value: T): Array<T> => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
};
console.log(createArray(4, 6)); // [6,6,6,6]
console.log(createArray(4, 'hello')); // ['hello','hello','hello','hello']
// 完整格式
// const createArray: <T>(length: number, value: T) => Array<T> = <T> (length: number, value: T): Array<T> => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result[i] = value;
//   }
//   return result;
// };
```
