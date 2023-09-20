

let myname = 'durgesh    '
// console.log(myname.length);
console.log(myname.truelength);

let myHero = ['thor','loki']


let heroPower = {
     thor:"hammer",
     loki:'magic',

     getLokiPower:function(){
          console.log(`loki power is ${this.loki}`);
     }
}

// how to inject prototype

Object.prototype.durgesh = function(){
     console.log('durgesh is present in all objects');
}
Array.prototype.heyDurgesh = function(){
     console.log('durgesh says hellow');
}
// heroPower.durgesh()
// myHero.durgesh()
// myHero.heyDurgesh()  // power given to array
// heroPower.heyDurgesh()


// inheritance
const user = {
     name: 'durgesh',
     email: 'abc@gmail.com'
}
const Teacher = {
     makeVideo: true,
}

const TeachingSupport = {
     isAvailable : false,
}

const TASupport = {
     makeAssignment : 'js Assignment',
     fullTime: true,
     __proto__: TeachingSupport
}

Teacher.__proto__ = user


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = 'CodeHustle       '

String.prototype.truelength = function(){
     console.log(`${this}`);
     // console.log(`${this.name}`);
     console.log(`true length is ${this.trim().length}`);
}

anotherUsername.truelength()
'durgesh'.truelength()
'nikhil'.truelength()