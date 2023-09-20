class User {
     constructor(email, password){
          this.email = email;
          this.password = password;
     }

     get email(){
          return `${this._email}durgesh`;
     }
     // if getter define you need set setter complusury
     set email(value){
          this._email = value
     }
     get password(){
          return `${this._password}durgesh`
     }
     set password(value){
          this._password = value
     }
}

const durgesh = new User('durgesh','ABC')
console.log(durgesh.email);