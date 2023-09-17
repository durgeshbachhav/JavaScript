// Concept of Singleton:
// Objects created using literals are not singletons, but objects created using constructors can be singletons.

// Creating a symbol
const mySym = Symbol("key1");

// Object Literal:
const user = {
    name: "durgesh",
    "full name": "durgesh bachhav", // Using square notation for property with spaces
    [mySym]: "mykey1", // This will not work as a property key
    age: 22,
    location: "nashik",
    email: "durgesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ['monday', 'wednesday']
};

// Accessing object properties:
// console.log(user.email); // Not the best practice for accessing properties
// console.log(user["full name"]); // Using square brackets for accessing a property with spaces
// console.log(user[mySym]); // Accessing a property with a symbol as the key

// Modifying object properties:
user.email = 'nikhil@gmail.com'; // Changing the email property

// Freezing an object to prevent property changes:
// Object.freeze(user);

// Attempting to change a frozen object's property (commented out since Object.freeze is used):
// user.email = 'nikhil@chatgpt.com';

// Functions can also be added to objects as properties:
user.greeting = function () {
    console.log(`Hello ${this.name}`);
};

// Calling the greeting function from the object:
console.log(user.greeting()); // Prints: "Hello durgesh"
