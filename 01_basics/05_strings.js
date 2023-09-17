// Declaring a constant variable 'name' with the value "durgesh".
const name = "durgesh";

// Declaring a constant variable 'repoCount' with the value 10.
const repoCount = 10;

// Using string concatenation to combine variables and strings.
// console.log(name + repoCount + " value");

// Using template literals to interpolate variables into a string.
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

// Creating a string using the String constructor.
const gameName = new String("Durgesh-YOutube");

// Accessing characters in a string using index notation.
// console.log(gameName[0]);

// Accessing the prototype of a string.
// console.log(gameName.__proto__);

// Getting the length of a string.
// console.log(gameName.length);

// Converting a string to uppercase.
// console.log(gameName.toUpperCase());

// Getting a character at a specific index.
// console.log(gameName.charAt(8));

// Finding the index of a substring in a string.
// console.log(gameName.indexOf("t"));

// Extracting a substring from a string using substring().
const newString = gameName.substring(0, 4);
// console.log(newString);

// Extracting a substring from a string using slice().
const anotherString = gameName.slice(-8, 3);
// console.log(anotherString);

// Creating a string with leading and trailing whitespace.
const NewStringOne = "   Durgesh   ";
// console.log(NewStringOne);

// Removing leading and trailing whitespace using trim().
// console.log(NewStringOne.trim());

// Working with URLs and replacing characters.
const url = " https://github.com/durgesh%20bachhav";
// console.log(url.replace("%20", "-"));

// Checking if a string includes a specific substring.
// console.log(url.includes("dursgesh"));

// Splitting a string into an array based on a delimiter.
// console.log(gameName.split("-"));

// Accessing characters in a string using charAt() and template literals.
const sentence = "hey there durgesh here and welcome back to our channel";
const index = 6;
// console.log(`the character at index ${index} is ${sentence.charAt(index)}`);

// Concatenating strings using concat().
const str1 = "hello";
const str2 = "world";
// console.log(str1.concat(" ", str2));
// console.log(str2.concat(", ", str1));

// Checking if a string ends or starts with a specific substring.
// console.log(str1.endsWith('o'));
