"use strict";
var myName = 'Den';
var myAge = 11;
var hasHobbies = true;
var myRealAge;
var hobbies = ['Cooking', 'Sports'];
hobbies = [0];
var address = ['Street', 0];
address = ['1', 0];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
function returnMyName() {
    return myAge;
}
function multiply(value1, value2) {
    return value1 * value2;
}
var myMultiply;
var userData = {
    name: 'Max',
    age: 12
};
var complex = {
    data: [10, 10],
    output: function () {
        return [0];
    }
};
complex.output(false);
console.log(complex.output(false));
var myRealRealAge = 27;
myRealRealAge = '27';
function neverReturn() {
    throw new Error('error');
}
var canBeNull = 12;
canBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
