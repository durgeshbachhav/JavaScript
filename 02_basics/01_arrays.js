// Array Creation and Initialization
const myArr = [0, 1, 2, 3, 4, 5, 6]; // Creating an array using array literal syntax
const myHeros = ['ironman', 'batman', 'superman'];
const myArr2 = new Array(1, 2, 3, 4, 5); // Creating an array using the Array constructor

// Accessing Array Elements by Index
// console.log(myArr[1]); // Accessing the element at index 1, which is 1

// Common Array Methods

// Adding elements to the end of the array
// myArr.push(7); // Adds 7 to the end of the array
// myArr.push(8); // Adds 8 to the end of the array

// Removing the last element from the array
// myArr.pop(); // Removes the last element (8) from the array

// Adding elements to the beginning of the array
// myArr.unshift(9); // Adds 9 to the beginning of the array

// Removing the first element from the array
// myArr.shift(); // Removes the first element (9) from the array

// Checking if an element exists in the array
// console.log(myArr.includes(3)); // true (checks if 3 exists in the array)
// console.log(myArr.indexOf(3)); // 3 (returns the index of the first occurrence of 3)

// Joining array elements into a string
// const newArr = myArr.join(); // Joins array elements into a string with commas
// console.log(newArr);

// Slicing and Splicing

// Slicing an array to create a new array with selected elements
console.log("Original Array (a):", myArr);
const arr = myArr.slice(1, 3); // Creates a new array [1, 2] from the original array
console.log("Sliced Array (arr):", arr);
console.log("Original Array after slice (b):", myArr); // Original array remains unchanged

// Splicing an array to remove elements and modify the original array
const arr1 = myArr.splice(1, 3); // Removes elements [1, 2, 3] from the original array
console.log("Spliced Array (arr1):", arr1);
console.log("Original Array after splice (c):", myArr); // Original array is modified

// The difference between splice and slice:
// - slice creates a new array with selected elements without modifying the original array.
// - splice removes elements from the original array and returns them in a new array.
