// Declaring a constant 'score' with the value 234.
const score = 234;

// Creating a Number object 'balance' with a value of 200.
const balance = new Number(200);

// Logging the value of 'score' and 'balance'.
// console.log(score);
// console.log(balance);

// Converting 'balance' to a string and finding its length.
// console.log(balance.toString().length);

// Formatting 'balance' as a fixed-point number with 2 decimal places.
// console.log(balance.toFixed(2));

// Working with a floating-point number.
const otherNumber = 123.5489;

// Formatting 'otherNumber' to have 4 significant digits.
// console.log(otherNumber.toPrecision(4));

// Formatting a large number with commas as per the Indian numbering system.
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// Math-related operations in JavaScript:

// Finding the absolute value of a number using Math.abs().
// console.log(Math.abs(-4)); // 4 (negative becomes positive)

// Rounding numbers using Math functions:
// console.log(Math.round(4.6)); // 5 (round to the nearest integer)
// console.log(Math.round(4.3)); // 4

// Using Math.ceil() to round up to the nearest integer.
// console.log(Math.ceil(4.9)); // 5 (always rounds up)

// Using Math.floor() to round down to the nearest integer.
// console.log(Math.floor(4.7)); // 4 (always rounds down)

// Finding the minimum and maximum of a set of numbers.
// console.log(Math.min(4, 5, 86, 4, 2, 1)); // 1
// console.log(Math.max(4, 5, 86, 4, 2, 1)); // 86

// Generating a random decimal between 0 and 1 using Math.random().
// console.log(Math.random());

// Generating a random integer between 1 and 10.
// console.log(Math.random() * 10 + 1);

// Generating a random integer between min and max (inclusive).
const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Additional comment:
// When working with numbers in JavaScript, it's important to understand the various methods available for formatting, rounding, and performing calculations. The Math object provides a range of useful functions for mathematical operations.
