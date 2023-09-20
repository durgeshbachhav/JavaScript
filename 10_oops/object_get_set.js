const User ={
     _email : 'aaa@gmail.com',
     _password: "abc",

     // define getter
     get email(){
          return this._email.toUpperCase()
     },
     set email(value){
          this._email = value
     }
}

const tea = Object.create(User)
console.log(tea.email);