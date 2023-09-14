// immediately involked function expressions (IIFE)


// named IIFE
(function chai(){
     console.log(`db connected`);
})();
// semicolon is required for this case otherwise it will get error and not run 2nd function

// unnamed IIFE
(()=>{
     console.log(`db connected two`);
})();
// IIFE  => jo function immediately execute ho jaye or global scope ke pollution se problem hoti hai kahi baar tho global scope ke pollution ke declaration ko hatane ke liye IIFE  ka use kiya


((dbname)=>{
     console.log(`db connected to ${dbname}`);
})('server');

// use semicolon ; for IIFE function

