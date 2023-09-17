// Define a constant accountNumber with a value of 12345
const accountNumber = 12345;

// Define a variable accountEmail with an initial value
let accountEmail = "durgesh@google.com";

// Define a variable accountPassword with an initial value
var accountPassword = "12345";

// Define a variable accountdCity with an initial value
accountdCity = "nashik";

// Declare a variable accountState without initializing it

// It's important to note that you cannot reassign a value to a constant.
// Uncommenting the next line will result in an error.
// accountNumber = 56789;

// Update the accountEmail variable with a new value
accountEmail = "nikhil@gmail.com";

// Update the accountPassword variable with a new value
accountPassword = '83249';

// Update the accountdCity variable with a new value
accountdCity = "pune";

// Display the values of accountEmail, accountNumber, accountPassword, accountdCity, and accountState in a table
console.table([accountEmail, accountNumber, accountPassword, accountdCity, accountState]);

// When declaring variables, prefer using const or let over var to avoid scope issues.
// var is function-scoped, which can lead to unexpected behavior when used inside blocks.
// const and let have block scope, providing more predictable behavior.
