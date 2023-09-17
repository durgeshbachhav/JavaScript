// Select the HTML element with the ID 'result' and store it in the 'result' variable
const result = document.querySelector('#result');

// Set up an interval that runs a function every 1000 milliseconds (1 second)
setInterval(() => {
  // Create a new Date object to get the current date and time
  let date = new Date();

  // Use the toLocaleTimeString() method to convert the date to a localized time string
  // and update the content of the 'result' element with the current time
  result.innerHTML = date.toLocaleTimeString();
}, 1000);
