// Using the for...of loop to iterate through an array
const myArr = [1, 2, 3, 4, 5];

for (const num of myArr) {
     // num takes on the values of each element in myArr
     // console.log(`Value of index is ${num}`);
}

// Iterating through a string using the for...of loop
const greeting = 'hello world';

for (const greet of greeting) {
     if (greet === ' ') continue; // Skip spaces
     // console.log(`Value of index is ${greet}`);
}

// Using the for...of loop with Map objects
let map = new Map();
map.set('IN', 'India');
map.set('fr', 'France');
map.set('Us', 'United States of America');

// Iterating through Map entries (key-value pairs) using destructuring
for (const [key, value] of map) {
     // console.log(key, ':-', value);
}

// Attempting to use for...of with a regular object (not iterable) will result in an error
const myObject = {
     "game_1": "cricket",
     "game_2": "wrestling"
};
// Uncommenting the following lines will result in a TypeError because myObject is not iterable.
// for (const [key, value] of myObject) {
//      console.log(key, ':-', value);
// }
