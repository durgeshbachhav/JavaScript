function SetUsername(username){
     this.username= username
     console.log('called');
}

function createUser(username, email, password){
     // SetUsername(username)  // ye call hi nhi ho raha hai
     // let call this
     // SetUsername.call(username)
     // execution context dena padega
     SetUsername.call(this, username)
     this.email = email
     this.password = password
}

const sam = new createUser('sam','sam@.com','123')

console.log(sam);