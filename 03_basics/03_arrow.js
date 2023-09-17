// Creating an object 'user'
const user = {
     username: 'durgesh',
     price: 999,
     // 'welcomeMessage' is a method that can access properties of 'user' using 'this'
     welcomeMessage: function () {
          console.log(`Welcome to our website ${this.username}`);
          console.log(this);
     }
}

// Calling the 'welcomeMessage' method
// user.welcomeMessage();

// Modifying the 'username' property of 'user'
// user.username = 'sam';

// Calling 'welcomeMessage' again to see the updated 'username'
// user.welcomeMessage();

// 'this' outside an object does not refer to the object itself; it depends on the context
// console.log(this); // Refers to the global context

// Arrow function example
// const addTwo = (num1, num2) => num1 + num2;

// Arrow function with curly braces and 'return'
// const addTwo = (num1, num2) => {
//      return num1 + num2;
// }

// Arrow function returning an object (requires parentheses around the object)
const addTwo = (num1, num2) => ({ username: "durgesh" });

// Calling the 'addTwo' function
console.log(addTwo(2, 3)); // Outputs: { username: 'durgesh' }

// Array and arrow function example
const MyArr = [2, 4, 5, 8, 6];

// Using the 'forEach' method with an arrow function
// MyArr.forEach(() => { /* function logic */ });

// Arrow functions are commonly used for concise function expressions and can be useful when working with arrays and higher-order functions.
