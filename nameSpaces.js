"use strict";
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    function calculateRectangle(width, heigth) {
        return width * heigth;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateRectangle(10, 20));
