// Named IIFE (Immediately Invoked Function Expression)
(function chai() {
     console.log(`DB connected`);
})();
// Semicolon is required before the IIFE to prevent potential syntax errors

// Unnamed IIFE using an arrow function
(() => {
     console.log(`DB connected two`);
})();

// IIFE with parameters
((dbname) => {
     console.log(`DB connected to ${dbname}`);
})('server');
// Semicolon is used before the IIFE to avoid any issues with previous code

// IIFE (Immediately Invoked Function Expressions) are often used to encapsulate code and avoid polluting the global scope. They can also take parameters and are executed immediately upon definition.
