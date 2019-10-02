"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    // we are using shorter syntax
    // in the shorter syntax we do not declare data members on top
    // instead we set them using the arguments of the constructor
    // in this syntax the assignments like this.name = name etc. are done automatically
    function Person(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    Person.prototype.celebrateBirthday = function () {
        this.age++;
    };
    ;
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var jane = new Person('Jane', 42, 'single');
var mark = new Person('Mark', 52, 'married');
console.log(jane.getAge());
