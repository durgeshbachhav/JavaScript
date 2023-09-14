// control flow or logic flow
const isUserLoggedIn = true
const temp = 41
if(isUserLoggedIn){//condition should be true for running code/execution code

}
// if(false){} 

// < , > , <= , >= , == , != , === tripple equal to check type also
// = assign , == compare

if(temp < 50){
     console.log(`temp `);
}

// var scope has a completely global

// const score = 200;
// if(score > 100){
//      var power = 'fly'
//      console.log(`user power : ${power}`);
// }
// console.log(`user power:${power}`);


const balance = 1000
// implicit scope
// if(balance > 500) console.log('test');

// if(balance < 500){
//      console.log(`less than`);

// }else if(balance <750){
//      console.log(`less than 750`);
// }
// else if(balance <900){
//      console.log(`less than 900`);
// }else{
// console.log(`greater than 1000`);
// }


const userLoggedIn = true
const debitCart = true
const loginFromGoogle = false
if(userLoggedIn && debitCart ){
     console.log(  `allow to buy courses`);
}
if(userLoggedIn || loginFromGoogle ){
     console.log(  `allow to buy courses`);
}