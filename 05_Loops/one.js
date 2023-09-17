// Using a for loop to iterate from 0 to 9
for (let i = 0; i < 10; i++) {
     if (i === 5) {
          console.log('5 is the best number'); // Executes when i is 5
     }
     console.log(i); // Prints the current value of i
}

// Using nested for loops to create a multiplication table
for (let i = 1; i <= 10; i++) {
     for (let j = 1; j <= 10; j++) {
          console.log(`${i} * ${j} = ${i * j}`); // Prints multiplication table
     }
}

// Iterating through an array using a for loop
const MyArray = ['flash', 'batman', 'superman', 'codeman'];
for (let i = 0; i < MyArray.length; i++) {
     console.log(`My name is ${MyArray[i]}`);
}

// Using the break and continue statements
for (let i = 0; i < 10; i++) {
     console.log(`${i}`);
     if (i === 3) {
          // continue; // Skips the rest of the loop body for i = 3
          break; // Exits the loop when i is 3
     }
}
