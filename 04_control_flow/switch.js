// Using the switch statement to handle different cases
const month = "jan";

// Evaluating the value of 'month' and branching based on its value
switch (month) {
     case 'jan':
          console.log('January');
          break; // Exit the switch statement after executing this block
     case 'feb':
          console.log('February');
          break;
     case 'mar':
          console.log('March');
          break;
     case 'april':
          console.log('April');
          break;
     default:
          console.log("Good day"); // If no match is found, this block is executed
}

// if you remove break then entire case after resolving can print escape default
