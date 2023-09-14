// declare = literal and constuctor
// concept singleton 
// literal se singleton nhi banta constructor se banta hai

// Object.create

// object literals

const mySym = Symbol("key1")


const user ={
     name:"durgesh",
     "full name":"durgesh bachhav", //we cant access this using . that why we use ["full name"] square notation
     [mySym]:"mykey1", //this will not work
     age:22,
     location:"nashik",
     email:"durgesh@google.com",
     isLoggedIn:false,
     lastLoginDays:['monday','wednusday']

}

// console.log(user.email); // this is not good way for good developing
// console.log(user["full name"]);
// console.log(user[mySym]); //symbol


user.email = 'nikhil@gmail.com'
// if you want to not change any object value then freez object

// Object.freeze(user)

user.email = 'nikhil@chatgpt.com'
// console.log(user);

// function

user.greeting = function(){
     console.log(`hello ${this.name}`);
}

console.log(user.greeting());