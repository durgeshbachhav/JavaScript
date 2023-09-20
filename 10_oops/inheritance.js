// inheritance

class User {
     constructor(username){
          this.username = username
     }

     logme(){
          console.log(`username is : ${this.username}`);

     }
}


class Teacher extends User{
     constructor(username , email, password){
          // add comment here how it works
          super(username)
          this.email = email
          this.password = password
     }

     addCourse(){
          console.log(`new course is added by : ${this.username}`);
     }

}

const durgesh = new Teacher('durgesh','abc@gmail.com','123')
durgesh.addCourse()
durgesh.logme();

const nikhil = new User('nikhil')
nikhil.logme()

console.log( durgesh instanceof User);
console.log( durgesh instanceof Teacher);

