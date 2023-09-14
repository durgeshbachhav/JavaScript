

function sayMyName() {
     console.log("H");
     console.log("i");
     console.log("t");
     console.log("5");
     console.log("i");
}

// sayMyName()
//fuction ki defination ke  parameter hote hai
// function addTwoNumbers(n1,n2){
//      console.log(n1 + n2);
// }


function addTwoNumbers(n1, n2) {
     // let result = n1 + n2;
     // return result

     return n1 + n2;
}

//function ke ander arguments pass karte hai
// addTwoNumbers(3 , 8)
const result = addTwoNumbers(3, 8);
// console.log(result);

function loginUserMessage(username = "sam") {
     if (!username) {
          console.log("please enter a username");
          return
     }
     return `${username} just logged in`
}

// console.log(loginUserMessage("durgesh"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage("durgesh"));

//
// ... is called rest operator as well as spred operator depend on condition
// function calculateCartPrice(...num1){
//      return num1
     
// }
function calculateCartPrice(val1,val2,...num1){
     return num1
     
}
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
     username:"durgesh",
     prices:"199"
}

function handleObjcet(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}


// handleObjcet(user);
handleObjcet({
     username:"sam",
     price:144 

})

const mynewArray=[200,300,400,500,600]

function returnSecondValue(getarray){
     return getarray[1];
}
// console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue([200,600,500]));