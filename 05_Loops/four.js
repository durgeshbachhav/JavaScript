const myObject = {
     js: "JavaScript",
     cpp: "C++",
     rb: "Ruby",
     swift: "Swift by Apple"
};

// Using the for...in loop to iterate through object properties
for (const key in myObject) {
     // key represents the property names in myObject
     // console.log(`${key} is an extension for: ${myObject[key]}`);
}

const programming = ['js', 'cpp', 'java', 'rb'];

// Using the for...in loop with arrays (not recommended)
for (const key in programming) {
     // key represents the array indices
     // console.log(`${key}`);
     // console.log(programming[key]);
}

// Using the for...in loop with Map objects (not recommended)
// Note: Maps are not directly iterable with for...in loops
// for (const key in map) {
//     console.log(key);
// }

// Tips for choosing the right loop type:
// - For objects: Use the for...in loop to iterate through object properties.
// - For arrays: Use the for...of loop to iterate through array elements.
// - Avoid using for...in with arrays and Map objects, as it may lead to unexpected behavior.
