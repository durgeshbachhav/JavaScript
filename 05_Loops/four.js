

const myObject ={
     js:"javascript",
     cpp:"java",
     rb:"ruby",
     swift:"swift by apple"
}

// for in loop  are use for specily for object

for (const key in myObject) {
     // console.log(`${key} is extension for :${myObject[key]}`);
}

const programming = ['js','cpp','java','rb']
for (const key in programming) {
     // console.log(`${key}`);
     // console.log(programming[key]);
}

// let map = new Map()
// map.set("IN","India")
// map.set("fr","france")
// map.set("Us","united states of america")
// 
// this loop is not posible
// map is not iterable that's why it can not iteratable
for (const key in map) {
//     console.log(key);
}


// tips to use loops type
// object => for in loop
// arrays => for of loop