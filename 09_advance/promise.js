// fetch('http:/something.com').then().catch().finally()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise


// promise 1
const promiseOne = new Promise(function (resolve, reject) {
     // do an async task 
     // ex. db calls, cryptography network related works
     setTimeout(() => {
          console.log('async task is completed');
          resolve()
     }, 1000)
})
// tnen ka seedha connection hai resolve ke sath
// we need to call resolve in promise
promiseOne.then(() => {
     console.log('promise consumed');
})


// 2nd promise

// isme hum do alag task nhi karenge matalab hum promise ko variable mein store nhi karenge direct karenge
new Promise((resolve, reject) => {
     setTimeout(() => {
          console.log('async task 2');
          resolve()
     }, 1000);
}).then(() => {
     console.log('async 2 resolve');
})


// promise 3rd

const promiseThree = new Promise((res, rej) => {
     setTimeout(() => {
          // we can pass array ,object etc.
          res({
               username: "durgesh",
               email: "abc@gmail.com"
          })
     }, 1000);
})

// promise consume karunga
promiseThree.then((user) => {
     console.log(user);
})

// promise 4th

const promiseFour = new Promise((res, rej) => {
     setTimeout(() => {
          // iske ander hum error bhi dete hai
          let error = true;
          // let error = false
          if (!error) {
               res({ username: "durgesh", password: "123" })
          } else {
               // lets use reject (rej)
               rej('error:something went wrong')
          }

     }, 1000);
})
// we can not store the this data in variable we cant access this
// that why we use chaining
promiseFour
     .then((user) => {
          console.log(user);
          return user.username
     })
     .then((username) => {
          console.log(username);
     })
     .catch((er) => {
          console.log(er);
     })

// in some situation we need to use finally() and it will always executes
.finally(()=>{
     console.log("the promise is either is resolve or rejected");
})


// promise 5

const promiseFive = new Promise ((res,rej)=>{
     setTimeout(() => {

          // let error = true;
          let error = false;
          if (!error) {
               res({ username: "durgesh", password: "123" })
          } else {
               rej('error:js went wrong')
          }

     }, 1000);

})

// let use  async await describe more

async function consumePromiseFive(){
     // promise ek object hai to is promiseFive() is tarah se consume nhi karenge 
     // async await cant handle error directly so they suggest a error so we use try catch block
   try {
     const response = await promiseFive
     console.log(response);
   } catch (error) {
     console.log(error);
   }
}
// lets call this function
consumePromiseFive()

// const fetchdata =async ()=>{
//     try {
//      const response =await fetch('https://jsonplaceholder.typicode.com/users')
//      console.log(response);
//      // convert this format into json
//      // json() function take time so we neet make that await if we dont make it this will be pending
//      const data =await response.json(); 
//      console.log(data);
//     } catch (error) {
//      console.log(error);
//     }
// }

// fetchdata()

// agar mujhe isi function ko promise.then() function mein likna hota toh kaise likte
// in this case we dont need to add trycatch block and async await
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//      return response.json()
// })
// .then((data)=>{
//      console.log(data);
// })
// .catch((e)=>{
//      console.log(e);
// })

// interesting thing

fetch('https://api.github.com/users/durgeshbachhav')
.then((response)=>{
     return response.json()
})
.then((data)=>{
     console.log(data);
})
.catch((e)=>{
     console.log(e);
})




// links 
// https://developer.mozilla.org/en-US/docs/Web/API/fetch
// https://blog.logrocket.com/fetch-api-node-js/