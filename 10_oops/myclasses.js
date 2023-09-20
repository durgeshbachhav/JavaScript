// ES5

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

function User(username, email, password){
     this.username = username
          this.email = email
          this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User.prototype.changeUsername = function(){
     return `${this.username.toUpperCase()}`
}

const nikhil = new User('nikhil','abc@gmail.com','123')
console.log(nikhil.encryptPassword());
console.log(nikhil.changeUsername());