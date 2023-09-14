// const tinder = new Object() // it is singleton object
const tinder ={}
tinder.id='123abc'
tinder.name='sam'
tinder.isLoggedIn=false

// console.log(tinder);

const regularUser={
     email:"nikhil@gmail.com",
     fullname:{
          userfullname:{
               firstname:"durgesh",
               lastname:'bachhav'
          }
     }
}
// console.log(regularUser.fullname.userfullname.firstname);

// how to compine object or merge object

const obj1={
     1:'a',
     2:'b'
}
const obj2={
     3:'c',
     4:'d'
}
const obj4 ={
     5:'e',
     6:'f'
}

// const obj3 ={obj1,obj2}

// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 ={...obj1,...obj2,...obj4}

// console.log(obj3);

const users =[
     {
          id: 1,
          username : 'johndoe',
     },
     {
          id: 1,
          username : 'johndoe',
     },
     {
          id: 1,
          username : 'johndoe',
     },
]

// console.log(users[0].username);
// console.log(tinder);
// console.log(Object.keys(tinder)); //output type is array
// console.log(Object.values(tinder)); //output type is array
// console.log(Object.entries(tinder)); //output type is array

// console.log(tinder.hasOwnProperty('name'));



// destructure can be done in object and array

const course ={
     coursename:"codehustle",
     price:"999",
     instructor:"hitesh",

}

// course.instructor
//destucture
const {instructor}=course
console.log(instructor);


//json
// {
//      "name":"durgesh",
//      "coursename":"js",
//      "price":"free"
// }

// [
//      {},
//      {},
//      {},
//      {},
// ]