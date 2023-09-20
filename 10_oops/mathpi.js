const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// factory function

const durgesh = {
     name:"durgesh",
     email:"abc@gmail.com",
     isLogin:true,
     

     orderChai : function(){
          console.log('chai is not ready');
     }
}

// console.log(Object.getOwnPropertyDescriptor(durgesh , "name"));  //singel prop
// console.log(Object.getOwnPropertyDescriptors(durgesh )); // all props  sssssss

Object.defineProperty(durgesh,'name',{
     writable: false,
     // enumerable : true //for loop mein jayega
     enumerable : false // for loop mein nhi jayega
})

// console.log(Object.getOwnPropertyDescriptor(durgesh , "name")); 


for (let [key,value] of Object.entries(durgesh)) {
     if(typeof value !== "function"){
          console.log(`${key} : ${value}`);
     }
}