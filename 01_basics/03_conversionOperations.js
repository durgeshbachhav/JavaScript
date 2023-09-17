// Declaring a variable username with the value "99".
// Note: You cannot declare the same variable name twice in the same scope.
// let username = "99";
// Instead, you can reassign the value of the existing variable.
let username = "durgesh";

// Logging the data type of the username variable.
// console.log(typeof username);

// You can also wrap the variable in parentheses when using typeof.
// console.log(typeof (username));

// Converting the string "username" into a number.
let valueInNumber = Number(username);

// Logging the data type of valueInNumber.
// console.log(typeof valueInNumber);

// The valueInNumber is NaN (Not-a-Number) because "durgesh" cannot be converted into a number.
// console.log(valueInNumber);

// Converting various values into boolean.
let isLoggedIn = "durgesh";
let convertIntoBoolean = Boolean(isLoggedIn);
// console.log(convertIntoBoolean);

// Converting a number into a string.
let num = 33;
let StringNumber = String(num);
// console.log(StringNumber);
// console.log(typeof StringNumber);

// Performing arithmetic operations.
let value = 3;
let negValue = -value;
// console.log(negValue);

// Arithmetic operations: +, -, *, ** (exponentiation), /, % (remainder).
// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3); // 2 raised to the power of 3
// console.log(2 / 2);
// console.log(2 % 2);

// Concatenating strings.
let str1 = "hello";
let str2 = " durgesh";
let str3 = str1 + str2;
// console.log(str3);

// Tricky type conversion with the + operator.
// console.log("1" + 3); // "13"
// console.log(3 + "1"); // "31"
// console.log(3 + 2 + "1"); // (3 + 2) + "1" => "51"
// console.log("1" + 2 + 2); // "122" (no addition here)

// Avoid declaring multiple variables on the same line for readability.
let n1, n2, n3 = 2 + 2;
// This only initializes n3, and n1 and n2 are left undefined.

// Incrementing a variable.
let gameChanger = 100;
gameChanger++;
// console.log(gameChanger);
