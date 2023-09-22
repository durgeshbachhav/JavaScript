// ES6

// class User{
//      // jaise hi woh new keyword kam mein loge constructor call ho jayega
//      constructor(username, email, password){
//           this.username = username
//           this.email = email
//           this.password = password
//      }

//      encryptPassword(){
//           return `${this.password}abc`
//      }
//      changeUsername(){
//           return `${this.username.toUpperCase()}`
//      }
// }

// const durgesh = new User('durgesh','abc@gmail.com','123')
// console.log(durgesh.encryptPassword());
// console.log(durgesh.changeUsername());

// behind the scenes

function User(username, email, password) {
     this.username = username
     this.email = email
     this.password = password
}

User.prototype.encryptPassword = function () {
     return `${this.password}abc`
}
User.prototype.changeUsername = function () {
     return `${this.username.toUpperCase()}`
}

const nikhil = new User('nikhil', 'abc@gmail.com', '123')
console.log(nikhil.encryptPassword());
console.log(nikhil.changeUsername());

/* 

Jab aap ek constructor function (jaise ki `User`) se naye objects banate hain, toh har naya object us constructor function ke prototype se juda hota hai. Prototype ek tarah ka template hota hai jise har object apne andar rakhta hai. 

Iska fayda yeh hai ki jab aap prototype ke andar koi function ya property define karte hain, toh woh function ya property har object ke liye ek hi copy mein memory mein store hoti hai, na ki har object ke liye alag-alag copy ban jati hai. Isse memory save hoti hai, kyunki aapke sabhi objects ek common prototype ko share karte hain.

Is code mein, `User` constructor function ke prototype ke andar `encryptPassword` aur `changeUsername` functions define ki gayi hain. Jab aap `nikhil` jaise naye objects banate hain (`new User('nikhil','abc@gmail.com','123')`), toh woh objects in functions ko access kar sakte hain, lekin har object ke andar alag-alag copy nahi banati hai, balki woh function prototype se access hoti hain. Isse memory efficient hota hai.

Toh prototype ka istemal memory optimization aur code maintainability ke liye kiya jata hai, taaki aap ek hi jagah par functions aur properties define karke unhe sabhi objects ke liye share kar sakein.
*/