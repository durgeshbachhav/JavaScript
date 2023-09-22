// Define a base class 'User' with a constructor that initializes the 'username' property.
class User {
     constructor(username){
          this.username = username;
     }

     // Define a method 'logme' to log the 'username'.
     logme(){
          console.log(`username is : ${this.username}`);
     }
}

// Define a derived class 'Teacher' that inherits from 'User'.
class Teacher extends User {
     constructor(username, email, password){
          super(username); // Call the constructor of the base class ('User') and pass 'username' to it.
          this.email = email; // Initialize 'email' property.
          this.password = password; // Initialize 'password' property.
     }

     // Define a method 'addCourse' specific to the 'Teacher' class.
     addCourse(){
          console.log(`new course is added by : ${this.username}`);
     }
}

// Create an instance of 'Teacher' class with 'username' as 'durgesh', 'email' as 'abc@gmail.com', and 'password' as '123'.
const durgesh = new Teacher('durgesh', 'abc@gmail.com', '123');

// Call 'addCourse' and 'logme' methods on the 'durgesh' object.
durgesh.addCourse(); // This method is specific to the 'Teacher' class.
durgesh.logme(); // This method is inherited from the 'User' class.

// Create an instance of the base class 'User' with 'username' as 'nikhil'.
const nikhil = new User('nikhil');

// Call 'logme' method on the 'nikhil' object.
nikhil.logme(); // This method is defined in the 'User' class.

// Check if 'durgesh' is an instance of 'User' and 'Teacher'.
console.log(durgesh instanceof User); // Should be true because 'Teacher' is a subclass of 'User'.
console.log(durgesh instanceof Teacher); // Should be true because 'durgesh' is an instance of 'Teacher'.
