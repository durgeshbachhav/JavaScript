// Define a JavaScript class called 'User' to represent user objects.
class User {
     // Constructor initializes 'email' and 'password' properties.
     constructor(email, password){
          this.email = email; // Initialize 'email' property with the provided 'email'.
          this.password = password; // Initialize 'password' property with the provided 'password'.
     }

     // Getter for 'email' property.
     get email(){
          return `${this._email}@gmail.com`; // Return 'email' with '@gmail.com' appended.
     }
     // If a getter is defined, a setter is required.

     // Setter for 'email' property.
     set email(value){
          this._email = value; // Set the private '_email' property with the provided 'value'.
     }

     // Getter for 'password' property.
     get password(){
          return `${this._password}durgesh`; // Return 'password' with 'durgesh' appended.
     }

     // Setter for 'password' property.
     set password(value){
          this._password = value; // Set the private '_password' property with the provided 'value'.
     }
}

// Create an instance of the 'User' class with 'email' as 'durgesh' and 'password' as 'ABC'.
const durgesh = new User('durgesh','ABC');

// Log the 'password' property of the 'durgesh' object to the console.
console.log(durgesh.password);
