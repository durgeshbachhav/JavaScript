// Comparing numbers using comparison operators:
// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 <= 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); // true

// Comparing a string to a number:
// console.log("2" > 1); // true
// console.log("02" > 1); // true (string "02" is converted to a number)

// Comparing null and 0:
// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true
// Explanation: JavaScript uses type coercion to convert null to a number, making the last comparison true (0 >= 0).

// Comparing undefined to 0:
// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// All comparisons with undefined result in false because undefined doesn't have a meaningful numeric representation.

// Comparing a string and a number:
console.log("2" == 2); // true
console.log("2" === 2); // false
// Explanation: The first comparison ("2" == 2) uses type coercion and converts the string to a number before comparison, resulting in true.
// The second comparison ("2" === 2) uses strict equality (===) and checks both value and data type, so it's false because the data types are different.
