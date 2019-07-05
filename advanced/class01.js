var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.size = 20;
        _this.name = 'securityDoor';
        return _this;
    }
    SecurityDoor.prototype.alert = function () {
        console.log('SecurityDoor alert');
    };
    return SecurityDoor;
}(Door));
var Car = /** @class */ (function () {
    function Car() {
        this.size = 10;
        this.name = 'car';
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    return Car;
}());
var AdvancedCar = /** @class */ (function () {
    function AdvancedCar() {
        this.size = 40;
        this.name = 'advancedCar';
    }
    AdvancedCar.prototype.alert = function () {
        console.log('AdvancedCar alert');
    };
    AdvancedCar.prototype.lightOff = function () { };
    AdvancedCar.prototype.lightOn = function () {
    };
    return AdvancedCar;
}());
var securityDoor = new SecurityDoor();
securityDoor.alert();
var car = new Car();
car.alert();
