// for of
// higher order function
// array specific loop
// ["","",""]
// [{},{},{}]

const myArr = [1,2,3,4,5]
// for of loop => object aur array, string par hume laga sakte hai
for (const num of myArr) {
     // console.log(`value of index is ${num}`);
}

const greting = 'hello world'
for (const greet of greting) {
     if(greet == " ") continue
     // console.log(`value of index is ${greet}`);
}

// Maps => it has unique values
let map = new Map()
map.set("IN","India")
map.set("fr","france")
map.set("Us","united states of america")
// console.log(map);
// kya mein ispe loop laga sakta hoon

// for (const key of map) {
//      console.log(key);
// }

//  destructure array
for (const [key, value] of map) {
     // console.log(key , ":- " , value);
}

const myObject = {
     "game_1":"cricket",
     "game_2":"wreteling"
}
// for (const [key, value] of myObject) {
//      console.log(key , ":- " , value);
// }

// this will getting error: TypeError: myObject is not iterable
// so map is iterable but object not yah yah it alse but some different way
