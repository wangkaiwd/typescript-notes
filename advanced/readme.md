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
