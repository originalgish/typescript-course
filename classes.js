"use strict";
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
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.type = 'type';
        this.age = 27;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
    };
    return Person;
}());
var person = new Person('Max', 'max');
var Den = /** @class */ (function (_super) {
    __extends(Den, _super);
    function Den(username) {
        var _this = _super.call(this, 'Den', username) || this;
        _this.name = 'Den';
        return _this;
    }
    return Den;
}(Person));
// Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(2 * Helpers.calcCircumference(8));
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProjects = /** @class */ (function (_super) {
    __extends(ITProjects, _super);
    function ITProjects() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProjects.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProjects;
}(Project));
var newProject = new ITProjects();
console.log(newProject);
newProject.changeName('Super IT Project');
console.log(newProject);
