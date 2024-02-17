/*
To Install Typescript, first install npm and follow, in this file folder:
$ npm install -g typescript
$ tsc program.ts
$ node program.js
*/

class Person {
    constructor(private name: string, private age: number) {}

    greeting(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

let person1 = new Person("Alex Pimenta", 51);
console.log(person1.greeting());

let number = 0;
// Example of a for loop
for (let i = 0; i < 5; i++) {
    console.log(`Number ${i}`);
    number = Math.round(Math.random() * 10);
}

// Example of if-else conditional
console.log(`The number is ${number}`);
if (number > 5) {
    console.log("The number is greater than 5.");
} else {
    console.log("The number is less than or equal to 5.");
}
