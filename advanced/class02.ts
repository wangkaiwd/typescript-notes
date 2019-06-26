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
