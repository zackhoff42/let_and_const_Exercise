const PI = 3.14;

let greet = 'hi';
const farewell = 'goodbye';

// 1. What is the difference between var and let?
// var can be both redeclared and reassigned. let can only be reassigned, not redeclared. Also, var can be hoisted, while let variables have block scope.

//2. What is the difference between var and const?
// const cannot be redeclared or reassigned, while var can. const also creates block scope, while you can access a hoisted variable with var.

//3. What is the difference between let and const?
// let can be reassigned, while const cannot.

//4. What is hoisting?
// Hoisting is the JS compiler 'hoisting' the variables to the top of the scope they're declared in. var variables can be hoisted so you can access the variable and it's undefined value before it's actual declaration. For example, if you have some code:
// console.log(greet);
// var greet = 'Hello';
// console.log(greet);
// Instead of throwing a syntax error, the console will first print 'undefined', then the greet variable, which is not the case with const and let.