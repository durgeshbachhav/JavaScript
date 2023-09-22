// Get the property descriptor of the 'PI' property in the Math object.
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// Access and log the value of Math.PI.
// console.log(Math.PI);

// Attempt to modify Math.PI (commented out as it's not allowed).
// Math.PI = 5;
// console.log(Math.PI);

// Define an object 'durgesh' representing a user with properties.
const durgesh = {
     name: "durgesh",
     email: "abc@gmail.com",
     isLogin: true,
     
     // A method to order chai.
     orderChai: function() {
          console.log('chai is not ready');
     }
}

// Log the property descriptor of the 'name' property in 'durgesh' object (commented out).
// console.log(Object.getOwnPropertyDescriptor(durgesh, "name"));  // Single property

// Log all property descriptors of the 'durgesh' object (commented out).
// console.log(Object.getOwnPropertyDescriptors(durgesh)); // All properties

// Define the 'name' property in 'durgesh' as non-writable and non-enumerable.
Object.defineProperty(durgesh, 'name', {
     writable: false,
     // Make the property enumerable (uncomment to make it enumerable).
     // enumerable: true
     // Make the property non-enumerable (uncomment to make it non-enumerable).
     enumerable: false
})

// Log the property descriptor of the 'name' property in 'durgesh' object after modification.
// console.log(Object.getOwnPropertyDescriptor(durgesh, "name"));

// Iterate through the properties of 'durgesh' and log non-function key-value pairs.
for (let [key, value] of Object.entries(durgesh)) {
     if (typeof value !== "function") {
          console.log(`${key} : ${value}`);
     }
}
