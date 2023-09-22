// Creating a symbol
const mySymbol = Symbol();

// Symbols are unique, even if you create another symbol with the same description
const anotherSymbol = Symbol();

console.log(mySymbol === anotherSymbol); // false

// Symbols can also be created with a description (used for debugging purposes)
const namedSymbol = Symbol('mySymbolDescription');

// Using symbols as object property keys
const person = {
  name: 'John',
  age: 30,
};

const jobSymbol = Symbol('job');

// Adding a property with a symbol as the key
person[jobSymbol] = 'Engineer';

// Accessing the property using the symbol
console.log(person[jobSymbol]); // 'Engineer'

// Symbols are not enumerable in for...in loops and Object.keys
console.log(Object.keys(person)); // ['name', 'age']
for (const key in person) {
  console.log(key); // 'name', 'age'
}

// You can use the Object.getOwnPropertySymbols method to get all symbol properties
const symbolKeys = Object.getOwnPropertySymbols(person);
console.log(symbolKeys); // [Symbol(job)]

// You can also combine symbol properties and regular properties
const mixedObject = {
  [Symbol('a')]: 'Hello',
  b: 'World',
};

console.log(Object.getOwnPropertySymbols(mixedObject)); // [Symbol(a)]
console.log(Object.keys(mixedObject)); // ['b']
