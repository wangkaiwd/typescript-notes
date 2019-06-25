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


