/*
To Install Typescript, first install npm and follow, in this file folder:
$ npm install -g typescript
$ tsc program.ts
$ node program.js
*/
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greeting = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Person;
}());
var person1 = new Person("Alex Pimenta", 51);
console.log(person1.greeting());
var number = 0;
// Example of a for loop
for (var i = 0; i < 5; i++) {
    console.log("Number ".concat(i));
    number = Math.round(Math.random() * 10);
}
// Example of if-else conditional
console.log("The number is ".concat(number));
if (number > 5) {
    console.log("The number is greater than 5.");
}
else {
    console.log("The number is less than or equal to 5.");
}
