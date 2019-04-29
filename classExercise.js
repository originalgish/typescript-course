"use strict";
// Exercise 1
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 5;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooooooooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
// Exercise 2
var BaseObject = /** @class */ (function () {
    function BaseObject(width, height) {
        this.width = width;
        this.height = height;
    }
    BaseObject.prototype.calcSize = function () {
        return this.width * this.height;
    };
    return BaseObject;
}());
var rectangle = new BaseObject(5, 8);
console.log(rectangle.calcSize());
// Exercise 3
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = '';
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = 'Ma';
console.log(person.firstName);
person.firstName = 'Maximilian';
console.log(person.firstName);
