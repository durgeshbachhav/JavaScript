// primitives

// 7 types: String, Number, Boolean, Undefined, Null , Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIn = true;
const outsidetemp = null
let userEmail 
// how to use symbol
const id =Symbol('123')
const anotherId = Symbol('123')
// console.log(id == anotherId);



// reference datatypes
// Array, objects, Functions
const heros = ['spiderman', 'ironman','batman','captain america'];

const myObj={
     username:"durgesh",
     age:22,
}

const myFun = function () {
     console.log('hello world');
     
}


// stack(primitive) , heap(non-primitive)
let myname = "Durgesh"
let anotherName = myname
anotherName = "Nikhil"

console.log(myname);
console.log(anotherName);

let userOne ={
     email:"user@gmail.com",
     upi:"user@api"
}

let userTwo = userOne;
userTwo.email = "hitesh@gmail.com"
console.log(userOne.email);
console.log(userOne.email);