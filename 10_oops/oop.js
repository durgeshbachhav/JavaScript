// object literals


const user = {
     username: "durgesh",
     loginCount: 8,
     signedIn: true,

     getUserDetails: function () {
          // console.log("got user details");
          // console.log(`username:${this.username}`);
          console.log(this); //this is current context 
     }
}

// console.log(user['username']);
// console.log(user.getUserDetails());
// console.log(this); // =>{}


// const promiseOne = new Promise()
// const date = new Date()
// in this cases both uses new keyword for creating a new context  thats called constructor 

function User(username, email, password) {
          this.username = username;
          this.email = email;
          this.password = password;

          this.greeting = function(){
               console.log(`welcome ${this.username}`);
          }

//   return this
// what if i dont return this statement it can be work define implecitely define
}

const userOne =new User('durgesh', 'abc@gmail.com', '2345')
const userTwo =new   User('nikhil', 'bbb@gmail.com', '2345')
// constructor always return new instace object
// when we write new keyword it create empty new object/instance
// step 1 : create new object
// step 2: called constructor function because of new keyword
// step 3 : argument are injected eg.this keyword
// step 4 : we got this argument in function
// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
// check on google on instanceof