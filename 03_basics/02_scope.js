// Global variable 'a' declared with 'let'
let a = 200;

if (true) {
     // Block-scoped variable 'a' declared with 'let'
     let a = 20;
     const b = 30;
     // 'c' is declared with 'var', so it's function-scoped and can be accessed outside the block.
     var c = 40;
     // console.log("inner:", a); // Outputs: inner: 20
}

// The 'a' outside the block remains unaffected
// console.log(a); // Outputs: 200

// Attempting to access 'b' outside the block results in an error (commented out)
// console.log(b); // Error: b is not defined

// The 'c' declared with 'var' is accessible outside the block
// console.log(c); // Outputs: 40

// Nested functions and variable scope
function one() {
     // Function-scoped variable 'username' declared with 'const'
     const username = 'durgesh';

     function two() {
          // Function-scoped variable 'website' declared with 'const'
          const website = 'youtube';
          // console.log('username', username); // Accessible here because it's in the parent scope
     }
     // 'website' is not accessible here because it's declared in a different function scope
     // console.log(website); // Error: website is not defined
     two();
}
one();

if (true) {
     // Block-scoped variable 'username' declared with 'const'
     const username = "durgesh";
     if (username === "durgesh") {
          // Block-scoped variable 'website' declared with 'const'
          const website = "insta";
          // console.log(username + website); // Outputs: durgeshinsta
     }
     // 'website' is not accessible here because it's declared in a different block scope
     // console.log(website); // Error: website is not defined
}
// 'username' outside the block is accessible
// console.log(username); // Outputs: durgesh

// Interesting behavior with function declarations
console.log(addOne(5)); // Outputs: 6 (Function declaration is hoisted)
function addOne(num) {
     return num + 1;
}

// Attempting to access 'addTwo' before its declaration results in an error (commented out)
// console.log(addTwo(5)); // Error: addTwo is not a function

// Function expression assigned to a variable
const addTwo = function (num) {
     return num + 2;
}
