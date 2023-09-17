// Creating a new Date object representing the current date and time.
let MyDate = new Date();

// Various ways to display date and time information:
// console.log(MyDate.toString()); // Displays the date and time in a human-readable format.
// console.log(MyDate.toISOString()); // Returns the date and time in ISO format (UTC).
// console.log(MyDate.toUTCString()); // Displays the date and time in UTC format.
// console.log(MyDate.toLocaleDateString()); // Displays the date in a locale-specific format (e.g., "9/17/2023" in the U.S.).
// console.log(MyDate.toDateString()); // Displays the date in a human-readable format (e.g., "Sat Sep 17 2023").
// console.log(MyDate.toLocaleString()); // Displays date and time in a locale-specific format.
// console.log(MyDate.toTimeString()); // Displays the time part of the date and time.

// Checking the data type of the 'MyDate' variable.
console.log(typeof MyDate); // 'object' (because 'MyDate' is an instance of the Date object)

// Creating a Date object with a specific date and time.
// Available constructors:
// - new Date(year, month, day)
// - new Date(year, month, day, hours, minutes, seconds, milliseconds)
// - new Date(dateString)
// - new Date(milliseconds)
// let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023, 05:03 AM
// let myCreatedDate = new Date("2023-01-14"); // January 14, 2023
let myCreatedDate = new Date("01-14-2023"); // January 14, 2023

// Displaying the created date in a locale-specific format.
// console.log(myCreatedDate.toLocaleString());

// Getting the current timestamp (number of milliseconds since January 1, 1970, UTC).
let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// Getting the timestamp of 'myCreatedDate'.
// console.log(myCreatedDate.getTime());

// Converting milliseconds to seconds.
// console.log(Math.floor(Date.now() / 1000));

// Getting the day of the week (0 for Sunday, 1 for Monday, and so on).
let newDate = new Date();
console.log(newDate.getDay());

// Using string interpolation to display the day of the week.
// `${newDate.getDay()} and time is `

// Displaying the full weekday name.
let fullWeekday = newDate.toLocaleString("default", {
     weekday: "long",
});
