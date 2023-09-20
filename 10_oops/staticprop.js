class User {
     constructor(username) {
          this.username = username;
     }

     logme() {
          console.log(`username is : ${this.username}`);
     }
     // not everyone access that's why we use static
     static createId(){
          return `123`
     }
}

const durgesh = new User('durgesh')
// console.log(durgesh.createId());

class Teacher extends User{
     constructor(username,email){
          super(username)
          this.email = email
     }
}

const iphone = new Teacher('iphone','i@gmail.com')
iphone.logme()
console.log(iphone.createId());