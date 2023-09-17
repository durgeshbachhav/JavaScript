// Boolean variables to simulate user data
const isUserLoggedIn = true;
const temp = 41;

// Example of an 'if' statement
if (isUserLoggedIn) {
     // Code inside this block will execute because the condition is true
     // ...
}

// Comparison operators: <, >, <=, >=, ==, !=, === (strict equality checks both value and type)
if (temp < 50) {
     console.log(`Temperature is less than 50`);
}

// 'var' has function scope and is not block-scoped
// const score = 200;
// if (score > 100) {
//      var power = 'fly';
//      console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); // 'power' is accessible here

const balance = 1000;

// Example of implicit scope with a single-line 'if' statement
// if (balance > 500) console.log('Test');

// Example of 'if-else if-else' statements
// if (balance < 500) {
//      console.log(`Balance is less than 500`);
// } else if (balance < 750) {
//      console.log(`Balance is less than 750`);
// } else if (balance < 900) {
//      console.log(`Balance is less than 900`);
// } else {
//      console.log(`Balance is greater than or equal to 1000`);
// }

const userLoggedIn = true;
const debitCard = true;
const loginFromGoogle = false;

// Logical operators: && (AND), || (OR)
// Checking conditions for purchasing courses
if (userLoggedIn && debitCard) {
     console.log(`Allow the user to buy courses`);
}

// Using 'OR' operator
if (userLoggedIn || loginFromGoogle) {
     console.log(`Allow the user to buy courses`);
}
