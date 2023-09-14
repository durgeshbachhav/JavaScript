const user = {
     username: 'durgesh',
     price: 999,
     //current scope ya context ka ke value ko access karne ke liye hum this keyword use karte hai
     welcomeMessage: function () {
          console.log(`Welcome to our website ${this.username}`);
          console.log(this);
     }
}

// user.welcomeMessage()
// user.username = 'sam';
// user.welcomeMessage()

// console.log(this);
// function chai(){
//      let username = 'durgesh'
//      console.log(this.username);
// }

// chai()

// const chai =function(){
// let username = "durgesh"
// console.log(this.username);
// }

// chai();
const chai = () => {
     let username = "durgesh"
     console.log(this);
}

// chai();

// const addTwo = (num1,num2)=>{
//      return num1+num2;
// }

// console.log(addTwo(3,4));

// what is emplicit fuction look below
// const addTwo = (num1, num2) => num1 + num2

// when curly braces are use we need to write return and if parenthesis use no need to write return

// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username:"durgesh"}) 
// jab bhi hum arrow function use karte hai tab object ko hume curly braces mein define karna hota hai
console.log(addTwo(2,3));


const MyArr = [2,4,5,8,6]
// hum aise likte hai
// MyArr.forEach(function(){})
// MyArr.forEach(()=>{})