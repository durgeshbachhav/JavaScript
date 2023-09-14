// var c =300;

let a = 200;

if (true) {

     let a = 20;
     const b = 30;
     var c = 40;
     // console.log("inner:",a);

}



// console.log(a);
// console.log(b);
// console.log(a);



function one() {
     const username = 'durgesh'

     function two() {
          const website = 'youtube'
          // console.log('username', username);
     }
     // console.log(website);
     two()
}
one();


if(true){
     const username = "durgesh"
     if(username === "durgesh"){
          const website = "insta"
          // console.log(username + website);
     }
     // console.log(website);
}
// console.log(username);


// =================== interesting ======================

console.log(addOne(5));//execute  at any position
function addOne(num){
     return num + 1;
}


console.log(addTwo(5)); //we cannot access this
const addTwo = function(num){
     return num+2;
}
