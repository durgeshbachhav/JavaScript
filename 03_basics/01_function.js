// Function Declaration: sayMyName
function sayMyName() {
     console.log("H");
     console.log("i");
     console.log("t");
     console.log("5");
     console.log("i");
}

// Calling the sayMyName function
// sayMyName();

// Function Declaration: addTwoNumbers
function addTwoNumbers(n1, n2) {
     // Calculate the sum of n1 and n2
     return n1 + n2;
}

// Calling the addTwoNumbers function and storing the result
const result = addTwoNumbers(3, 8);
// console.log(result);

// Function with a default parameter
function loginUserMessage(username = "sam") {
     if (!username) {
          console.log("Please enter a username");
          return;
     }
     return `${username} just logged in`;
}

// Logging messages with different username inputs
// console.log(loginUserMessage("durgesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("durgesh"));

// Function with the rest operator (collects remaining arguments into an array)
function calculateCartPrice(val1, val2, ...num1) {
     return num1;
}

// Example of using the calculateCartPrice function
// console.log(calculateCartPrice(200, 400, 500, 2000));

// Object and function handling
const user = {
     username: "durgesh",
     price: "199"
}

function handleObject(anyObject) {
     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// Calling the handleObject function with an object as an argument
// handleObject(user);
handleObject({
     username: "sam",
     price: 144
})

// Function to return the second value from an array
const myNewArray = [200, 300, 400, 500, 600];

function returnSecondValue(getArray) {
     return getArray[1];
}

// Example of using the returnSecondValue function
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 600, 500])); // Outputs: 600
