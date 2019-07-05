var Car = /** @class */ (function () {
    function Car() {
        this.size = 10;
        this.name = 'car';
    }
    Car.prototype.alert = function () {
        return 'car alert';
    };
    Car.prototype.lightOff = function () {
        return true;
    };
    Car.prototype.lightOn = function () {
        return 111;
    };
    return Car;
}());
var car = new Car();
// Car { size: 10, name: 'car' } car alert true 111
console.log(car, car.alert(), car.lightOff(), car.lightOn());
