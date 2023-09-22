// ==========================variables

// const accountNumber = 12345;
// accountNumber = 8902;
// console.log(accountNumber);

// let name = 'durgesh'
// console.log(name);
// name = 'codehustle'
// console.log(name);


// var accountPassword = '12345'
// console.log(accountPassword);
// accountPassword = 93457;
// console.log(accountPassword);

// balance = 'dheil';
// console.log(typeof balance);

// let person = 2342
// console.log(person);

// console.table([person,name])

// =========================datatypes

// 'use strict'
// let name = 'durgesh'
// let age = 22;
// let islogedIn = true
// let dev = null; //deliberate absence
// let sport
// console.log(typeof age);
// console.table([name,age,islogedIn,dev])
// let symbol = new Symbol()
// console.log(typeof (sport));
// console.log(typeof sport);


// ===============================
// convert string to number 
// let username = '99'
// console.log(typeof (username));

// let convertNum = Number(username)
// console.log(convertNum);
// console.log(typeof(convertNum));

// ex: 2 is actuely a string
// let name = 'codehustle'
// console.log(typeof (name));
// let convertNum = Number(name)
// console.log(convertNum);

// ex: 3

// let num = 90;
// let convertString = String(num)
// console.log(typeof(convertString));


// convert values into boolean
// let name = 'codehustle'
// let convertBoolean = Boolean(name)
// console.log(convertBoolean);
// console.log(typeof(convertBoolean));

// ===============================arithmetic operations

// let value = 3;
// let negValue = -value;
// console.log(negValue);

// console.log(3 + 3);
// console.log(3 - 3);
// console.log(3 * 3);
// console.log(3 / 3);
// console.log(3 % 3);
// console.log(3 ** 3);

// concate string
// let str1 = 'hello'
// let str2 = 'codehustle'
// let str3 = str1 + str2
// console.log(str3);


// tricky convertion
//concat
// console.log("1" + 2);
// console.log(1+ "2");
// console.log(1+ "2" + "3");
// console.log("2" + "3" + 1);
// console.log("1"+ 3 + 1);
// // addition
// console.log(2 + 3 + "1");
// pehle 2+3 = 5 and then concate => 51

// let n1,n2,n3 = 2+ 4;
// console.log(n1);
// console.log(n2);
// console.log(n3);


// let increase = 100;
// increase++;
// console.log(increase);

// ================comparisons
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// console.log("2" == 2);
// console.log("2" === 2);

// ========================strings

// const name = 'durgesh'
// const repocount = 10;
// console.log(name + repocount +" value");
// console.log(`hello my name is ${name}  and my repocount is ${repocount}`);


// const name = new String('durgesh-bachhav')
// console.log(name[0]);
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(0));
// console.log(name.indexOf("s"));
// console.log(name.substring(0,7));

// console.log(name.slice(0 ,5));
// console.log(name);

// const fullname = "  lsafj  world   "
// // console.log(fullname);
// console.log(fullname.trim());
// // console.log(fullname.includes("a"));
// console.log(fullname.replace("lsafj", "hello"));

// console.log(fullname.endsWith(" "));


// ==========================nums and maths

// const score = 250;
// const balance = new Number(200)
// console.log(score);
// console.log(balance);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


// const floatNum = 60.5892334
// console.log(floatNum.toPrecision(4));

// let num = 10000000000;
// console.log( num.toLocaleString('en-IN'));

// console.log(Math.abs(4));
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));

// console.log(Math.max(1,2,4,56,3,5,423,5,6,86));
// console.log(Math.min(1,2,4,56,3,5,423,5,6,86));

// console.log(Math.random());
// console.log(Math.round(Math.random()* 100 + 1));

// const min = 50;
// const max = 100;
// console.log(Math.round(Math.random()*(max -min + 1))+ min);

// let date = new Date();
// console.log(date.toString());
// console.log(typeof (date));
// console.log(Date.now());

// 
// const names = ['daa','dasdlf','adslf','alsdfddfsd']

// const myobj= {
//      name:"aaa",
//      price:200,
// }

// const myfun= function(){
//      console.log('hello codehustle fam');
// }

// console.log(typeof(names));
// console.log(typeof(myobj));
// console.log(typeof(myfun));



// const myobj= {
//      name:"aaa",
//      price:200,
// }
// const myobj2 = myobj;
// myobj2.name= 'bbb'
// console.log(myobj.name);
// console.log(myobj2.name);

// =================array
// const myArr= ['aaaa',33452,true]
// console.log(myArr);

// const numbers = [ 12,32,34,54,5,6,77,8]
// const heroes = ['aaa','bbb','ccc']

// const myNum = new Array(1,2,3,4,5)
// console.table([myArr,myNum,numbers, heroes])

// console.log(myNum[3]);
// myNum.push(6)
// console.log(myNum);
// myNum.pop();
// console.log(myNum);
// myNum.unshift(0)
// console.log(myNum);
// myNum.shift()
// console.log(myNum);
// console.log(myNum.includes(3));
// console.log(myNum.indexOf(3));
// const joinArr = myNum.join(numbers);
// console.log(joinArr);


// console.log(`original array: ${numbers}`);
// const sliceArr = numbers.slice(0,4)
// console.log(`slice ${sliceArr}`);
// console.log(`original array: ${numbers}`);
// const splice = numbers.splice(1,4)
// console.log(`splice ${splice}`);
// console.log(`original array: ${numbers}`);

// const cricket = ['virat','rohit','dhoni']
// const football = ['chetri','ronaldo','nemar']
// cricket.push(football)
// console.log(cricket[3][0]);

// const team = cricket.concat(football)
// console.log(team);

// const team = [...cricket,...football]
// console.log(team);

// const arr = [1,2,3,[4,5,6],7,[8,3,5,[9,1,[4]]]];
// const flatArr = arr.flat(Infinity)
// console.log(flatArr);


// let score1 = 100
// let score2 = 120
// let score3 = 300
// console.log(Array.of(score1,score2,score3));

// const mySym = Symbol('key1')
// console.log(mySym);
// object literals
// const user={
//      name:"durgesh",
//      "full_name":'durgesh bachhav',
//      age: 32,
//      location: 'nashik',
//      [mySym]:'mykey1',
//      greeting : function(){
//           console.log(`hello ${this.name}`);
//      }
// }

// console.log(user.name);
// console.log(user['full_name']);
// console.log(user[mySym]);
// Object.freeze(user)
// user.location = 'pune'
// console.log(user.greeting());

// const data={};
// data.companyName = 'google'
// data.ceo = 'sunder pichai'
// data.hq = 'bangolore'
// console.log(data);

// const data2 = {
//      email:'google@.com',
//      fullname:{
//           userfullname:['sunder','pichai']
//      }
// }
// console.log(data2.fullname.userfullname[1]);

// const o1={
//      1:'a',
//      2:'b'
// }
// const o2={
//      3:'c',
//      4:'d'
// }
// const o3={
//      5:'e',
//      6:'f'
// }
// console.log(o1,o2,o3);
// const newObj = {
//      ...o1,...o2,...o3
// }
// console.log(newObj);


// const user = [
//      {
//           id:1,
//           name:'aaa'
//      },
//      {
//           id:2,
//           name:'ccc'
//      },
//      {
//           id:3,
//           name:'ddd'
//      },
// ]
// console.log(user[0].name);
// console.log(Object.keys(user[0]));
// console.log(Object.values(user[0]));
// console.log(Object.entries(user[0]));
// console.log(user.hasOwnProperty('name'));

// const {name , id} = user[0];
// console.log(id);

// function sayHello(){
//      console.log('hello js');
// }
// sayHello()

// function add(n1,n2){
//      return n1+n2
// }
// console.log(add(3,9));

// function login(username="durgesh"){
//      if(!username){
//           console.log('enter username');
//           return
//      }
//      return `${username} just log in`
// }
// console.log(login(''));


// function calculateCartPrice(val1,val2,...nums){
//      return nums;
// }
// console.log(calculateCartPrice(200,345,642,3452));

// const user = {
//      name:'durgesh',
//      price:199
// }

// function handleObject(anyObject){
//      console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
// }

// handleObject(user)
// handleObject({
//      name:"js course",
//      price:1299,
// })


// function returnSecondValue(getArr){
//      return getArr[1]
// }
// console.log(returnSecondValue([200,400,600,800,1000]));

// let a = 200;
// if(true){
//      let a = 200;
//      const b = 300
//      var c = 400;
//      console.log(`inner a : ${a}`);

// }
// console.log(`outer a: ${a}`);
// // console.log("b",b);
// console.log('c ',c);


// function one(){
//      const username = 'durgesh'

//      function two(){
//           const website = 'instagram'
//           console.log("username ",username);

//      }
//      two()
//      console.log('websote ',website);
// }
// one()

// if(true){
//      const username = 'durgesh';
//      if(username === 'durgesh'){
//           const website = 'insta'
//           console.log(username + website);
//      }
//      // console.log(website);
// }
// console.log('username ', username);
// console.log(addOne(5));
// function addOne(num){
//      return num + 1;
// }
// console.log(addTwo(5));
// const addTwo = function(num){
// return num + 2;
// }


// const user = {
//      username: "durgesh",
//      price: 1234,
//      welcome: function(){
//           console.log(`welcome to our website ${this.username}`);
//           console.log(this);
//      }
// }
// user.welcome();

// user.username = 'sam'
// user.welcome();

// const addTwo=(n1,n2)=>{
//      return n1+n2
// }

// console.log(addTwo(2,3));
// const myArr =[2,3,4,5,6,7]
// myArr.forEach((item)=> console.log(item))


// (function hello(){
//      console.log('hello everyone');
// })();
// (()=>{
//      console.log(`db connceted`);
// })();
// ((dbname)=>{
//      console.log(`connected to db ${dbname}`);
// })('server')

// const userloggedIn = true;
// const temp = 41;

// if(temp === 40){
//      console.log(`less than 50`);
// }else{
//      console.log(`temprature is greater than 50`);
// }

// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//      console.log(`object is empty`);
// }
// condition ? true:false

// for (let i = 0; i < 9; i++) {
//      if(i === 5){
//           console.log(`5 is best num`);
//      }
//      console.log(i);

// }

// for (let i = 1; i <= 10; i++) {
//      for (let j = 1; j <= 10 ; j++) {
//           console.log(`${i} * ${j} = ${i*j}`);
//      }

// }




// const myArr = [ 'batman','superman','ironman']
// for (let i = 0; i < myArr.length; i++) {
//      if(myArr[i] == 'batman'){
//           break;
//      }else{
//           console.log(myArr[i]);
//      }
// }

// let i = 0;
// while(i <=10){
//      console.log(i);
//      i+=2;
// }

// const myArr =['flash','ironman','spiderman']
// let arr = 0;
// while(arr < myArr.length){
//      console.log(`value is ${myArr[arr]}`);
//      arr++;
// }

// let score = 1;
// do{
//      console.log(score);
//      score++;
// }while(score<=10)

// for of
// const myArr = [1,2,3,4,5,6]
// for (const i of myArr) {
//      console.log(i);
// }

// const greeting = 'hello world'
// for (const i of greeting) {
//      if(i === " ")continue;
//      else console.log(i);
// }

// let map = new Map();
// map.set("in","india")
// map.set("uk","united kingdom")
// map.set("us","united state")

// for (const [key,value] of map) {
//      console.log(`key:${key} , value:${value}`);
// }

// const myObj = {
//      game1:"cricket",
//      game2:"football"
// }
// for (const [key,value] of myObj) {
//      console.log(key, value);
// }

// const myObj ={
//      js:'javascript',
//      cpp:'c plus plus',
//      rb:'ruby',
//      swift:'swift by google'
// }

// for in 
// for (const key in myObj) {
//      console.log(`${key} is extension for : ${myObj[key]}`);
// }

// let programming = ['java','cpp','js','ruby']
// for (const key in programming) {
//      // console.log(`${key}`);
//      console.log(`${programming[key]}`);

// }

// forEach
// const coding = ['java','cpp','js','ruby','c']
// coding.forEach((i)=>console.log(i))
// coding.forEach(function(item){
//      console.log(item);
// })

// function printme(item){
//      console.log(item);
// }

// coding.forEach(printme)
// coding.forEach((item, index , arr)=>{
//      console.log(item, index, arr);
// })

// const myCoding =[
//      {
//           lname:'java',
//           author:'james gosling'
//      },
//      {
//           lname:"js",
//           author:'abc'
//      },
//      {
//           lname:'cpp',
//           author:'ccc'
//      }
// ]

// myCoding.forEach(item => console.log(item.lname))

// const coding = ['java', 'cpp', 'js', 'ruby', 'c']

// const values = coding.forEach((item) => {
//      return item
// })
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 67, 78]
// const newNews = myNums.filter((num)=>{
//      return num > 4
// })
// console.log(newNews);

// const newNums  = []
// myNums.forEach((num)=>{
//      if(num > 4){
//           newNums.push(num)
//      }
// })
// console.log(newNums);
// const books = [
//      {
//           title: "book one",
//           genre: 'fiction',
//           publish: 1983,
//           edition: 2004
//      },
//      {
//           title: "book two",
//           genre: 'fantasy',
//           publish: 1990,
//           edition: 2006
//      },
//      {
//           title: "book three",
//           genre: 'mystery',
//           publish: 2005,
//           edition: 2013
//      },
//      {
//           title: "book four",
//           genre: 'science fiction',
//           publish: 2012,
//           edition: 2019
//      },
//      {
//           title: "book five",
//           genre: 'romance',
//           publish: 1987,
//           edition: 2002
//      },
//      {
//           title: "book six",
//           genre: 'thriller',
//           publish: 2001,
//           edition: 2010
//      }
// ]

// let userbooks = books.filter((bk) => {
//      return bk.genre === 'fiction'
// })
// userbooks = books.filter((bk) =>{
//      return bk.publish >= 2000 && bk.genre === 'thriller'
// })

// console.log(userbooks);


// const myNum = [1,2,3,4,5,6,7,8]

// // const newMaps = myNum.map((num)=> num * 10)
// // .map((num) => num + 1)
// // .filter((num)=> num >= 40)

// // console.log(newMaps);

// const myTotal = myNum.reduce((acc, curValue) => acc + curValue , 0)

// console.log(myTotal);

// const shoppingCart =[
//      {
//           itemname: "js",
//           price: 2999,
//      },
//      {
//           itemname: "rb",
//           price: 2999,
//      },
//      {
//           itemname: "py",
//           price: 2999,
//      },
//      {
//           itemname: "mern",
//           price: 2999,
//      },
// ]

// const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
// console.log(total);




// const promiseOne = new Promise((res,rej)=>{
//      setTimeout(() => {
//           console.log('async task completed');
//           res()
//      }, 1000);
// })
// promiseOne.then(()=>{
//      console.log('task consumed');
// })

// new Promise ((res,rej)=>{
//      setTimeout(() => {
//           console.log('async task 2 completed');
//           res()
//      }, 1000);
// }).then(()=>{
//      console.log('task 2 consumed');
// })

// const promiseThree = new Promise((res,rej)=>{
//      setTimeout(() => {
//           res({
//                name:'durgesh',
//                email:"abc@gmail.com"
//           })
//      }, 1000);
// })
// promiseThree.then((data)=>{
//      console.log(data);
// })

// const promiseFour = new Promise((res,rej)=>{
//      setTimeout(() => {
//           let error = false;
//           if(!error){
//                res({name:"durgesh",email:"abc@gmail.com"})
//           }else{
//                rej('error:something went wrong')
//           }
//      }, 1000);
// })
// promiseFour.then((data)=>{
//      console.log(data.name);
//      return data.name
// })
// .then((name)=>{
//      console.log(name);
// })
// .catch((e)=>{
//      console.log(e);
// })
// .finally(()=>{
//      console.log('promise complete');
// })


// const promiseFive = new Promise((res,rej)=>{
//      setTimeout(() => {
//           let error = true
//           if(!error){
//                res({name:"durgesh",age:22})
//           }else{
//                rej("error: something went wrong")
//           }
//      }, 1000);
// })

// async function consumePromiseFive (){

//     try {
//      const response = await promiseFive
//      console.log(response);
//     } catch (error) {
//      console.log(error);
//     }
// }
// consumePromiseFive()

// async function fetchdata() {
//      try {
//           const response = await fetch('https://jsonplaceholder.typicode.com/users')
//           const data = await response.json()
//           console.log(data);

//      } catch (error) {
//           console.log(error);
//      }
// }

// fetchdata()

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