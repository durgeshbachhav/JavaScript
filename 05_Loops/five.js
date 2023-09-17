const coding = ['js', 'py', 'cpp', 'java', 'c', 'rb'];

// Using the forEach loop to iterate through an array
coding.forEach(function (item) {
     // item represents each element in the array
     // console.log(item);
});

// Using an arrow function with forEach
coding.forEach((item) => {
     // console.log(item);
});

// Defining a named function for the forEach loop
function printMe(item) {
     // console.log(item);
}

// Using a named function with forEach (passing a reference)
coding.forEach(printMe);

// The forEach callback function can also receive the index and the array itself
coding.forEach((item, index, arrList) => { 
     // item represents each element, index is the current index, and arrList is the array itself
     // console.log(item, index, arrList);
});

// Iterating through an array of objects using forEach
const myCoding =[
     {
          name: "sam",
          std: 8,
     },
     {
          name: "ram",
          std: 6,
     },
     {
          name: "jam",
          std: 9,
     },
];

myCoding.forEach((item) => {
     // Accessing properties of each object in the array
     // console.log(item.name);
});
