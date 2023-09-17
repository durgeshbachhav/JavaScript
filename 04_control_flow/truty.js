// Example with different values assigned to 'userEmail'
// const userEmail = "durgesh"; // truthy
// const userEmail = ""; // falsy
// const userEmail = []; // falsy

// Checking if 'userEmail' is truthy or falsy
if (userEmail) {
     console.log("Got user email"); // Executes when 'userEmail' is truthy
} else {
     console.log('Don\'t have user email'); // Executes when 'userEmail' is falsy
}

// Falsy values in JavaScript: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// All other values are truthy, including "0", "false", " ", [], {}, and functions.

// Checking if an array is empty using its length property
if (userEmail.length === 0) {
     console.log('Array is empty'); // Executes when the array is empty
}

// Checking if an object is empty using Object.keys()
const myObj = {};
if (Object.keys(myObj).length === 0) {
     console.log('Object is empty'); // Executes when the object is empty
}

// Using the nullish coalescing operator (??) to provide default values
let val1;

val1 = 5 ?? 56; // If 'val1' is null or undefined, it becomes 5
val1 = null ?? 20; // If 'val1' is null or undefined, it becomes 20
val1 = undefined ?? 23; // If 'val1' is null or undefined, it becomes 23

// Chaining the nullish coalescing operator
val1 = null ?? 10 ?? 20; // If 'val1' is null or undefined, it becomes 10, and then 20

console.log(val1);

// Ternary operator (?:) for conditional expressions
const iceTeaPrice = 100;

// If 'iceTeaPrice' is less than or equal to 20, print "low"; otherwise, print "high"
iceTeaPrice <= 20 ? console.log('Low') : console.log("High");
