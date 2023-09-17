// Creating two arrays of heroes
const marvelHeroes = ['thor', 'ironman', 'spiderman'];
const dc = ['superman', 'batman', 'flash'];

// Attempt to push 'dc' array into 'marvelHeroes' array (results in nested array)
// marvelHeroes.push(dc);
// Arrays are not merged; 'dc' becomes a nested array within 'marvelHeroes'.
// console.log(marvelHeroes);
// Accessing an element within a nested array.
// console.log(marvelHeroes[3][1]); // 'batman' (index 3 accesses 'dc' array, and index 1 accesses 'batman' within 'dc')

// Merging arrays using the concat method
// const allHeroes = marvelHeroes.concat(dc);
// console.log(allHeroes);

// Merging arrays using the spread operator (ES6)
const allNewHeroes = [...marvelHeroes, ...dc];
// console.log(allNewHeroes);

// Handling arrays with nested arrays
const Another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flattening the nested arrays using flat method with Infinity depth
const realAnotherArray = Another_array.flat(Infinity);
// console.log(realAnotherArray);

// Checking if a variable is an array
// console.log(Array.isArray("durgesh")); // false
// console.log(Array.from("durgesh")); // Converts a string into an array of characters
// console.log(Array.from({name: "durgesh"})); // Converts an object into an array (array of [{name: "durgesh"}])

// Creating an array from a list of values using Array.of
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
