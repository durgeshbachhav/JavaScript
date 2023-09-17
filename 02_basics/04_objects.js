// Creating an empty object using object literal notation
const tinder = {}; // This is not a singleton object; it's a regular empty object

// Adding properties to the 'tinder' object
tinder.id = '123abc';
tinder.name = 'sam';
tinder.isLoggedIn = false;

// Accessing properties of the 'tinder' object
// console.log(tinder);

// Creating a nested object
const regularUser = {
    email: "nikhil@gmail.com",
    fullname: {
        userfullname: {
            firstname: "durgesh",
            lastname: 'bachhav'
        }
    }
};

// Accessing a nested property using dot notation
// console.log(regularUser.fullname.userfullname.firstname);

// Merging objects using the spread operator
const obj1 = {
    1: 'a',
    2: 'b'
};
const obj2 = {
    3: 'c',
    4: 'd'
};
const obj4 = {
    5: 'e',
    6: 'f'
};

const obj3 = { ...obj1, ...obj2, ...obj4 };
// console.log(obj3);

// Array of objects
const users = [
    {
        id: 1,
        username: 'johndoe',
    },
    {
        id: 2,
        username: 'janedoe',
    },
    {
        id: 3,
        username: 'alice',
    }
];

// Accessing properties of objects in an array
// console.log(users[0].username);

// Object methods
// console.log(Object.keys(tinder)); // Returns an array of keys
// console.log(Object.values(tinder)); // Returns an array of values
// console.log(Object.entries(tinder)); // Returns an array of key-value pairs

// Checking if an object has a specific property
// console.log(tinder.hasOwnProperty('name'));

// Object destructuring
const course = {
    coursename: "codehustle",
    price: "999",
    instructor: "hitesh",
};

// Destructuring to get the 'instructor' property
const { instructor } = course;
// console.log(instructor);
