// Primitive data types (7 types): String, Number, Boolean, Undefined, Null, Symbol, BigInt

// Examples of primitive data types:
const score = 100; // Number
const scoreValue = 100.3; // Number

const isLoggedIn = true; // Boolean
const outsideTemp = null; // Null
let userEmail; // Undefined

// How to use Symbol: Creating unique symbols
const id = Symbol('123');
const anotherId = Symbol('123');
// Symbols are always unique, so id and anotherId are not equal.
// console.log(id == anotherId); // false

// Reference data types: Array, Objects, Functions

// Examples of reference data types:
const heroes = ['spiderman', 'ironman', 'batman', 'captain america']; // Array

const myObj = {
    username: "durgesh",
    age: 22,
}; // Object

const myFun = function () {
    console.log('hello world');
}; // Function

// Stack vs. Heap (Primitive vs. Non-primitive):
let myName = "Durgesh";
let anotherName = myName;
anotherName = "Nikhil";

// 'myName' and 'anotherName' are separate copies of the primitive string.
// Changing one doesn't affect the other.
console.log(myName); // "Durgesh"
console.log(anotherName); // "Nikhil"

let userOne = {
    email: "user@gmail.com",
    upi: "user@api"
};

let userTwo = userOne;
userTwo.email = "hitesh@gmail.com";

// Both 'userOne' and 'userTwo' reference the same object, so changing one also changes the other.
console.log(userOne.email); // "hitesh@gmail.com"
console.log(userTwo.email); // "hitesh@gmail.com"
