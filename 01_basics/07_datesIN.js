// dates

let MyDate = new Date()
// console.log(MyDate.toString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toUTCString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(MyDate.toTimeString());

console.log(typeof MyDate);

// let myCreatedDate = new Date(2023, 0,23)
// let myCreatedDate = new Date(2023, 0,23, 5,3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate.getDay());

// string interpolation
// `${newDate.getDay()} and time is `

newDate.toLocaleString("default", {
     weekday: "long",
})