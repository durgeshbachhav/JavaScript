
// const userEmail = "durgesh"
const userEmail = ""
// const userEmail = []

if(userEmail){
     console.log("got user email");
}else{
     console.log('dont have user email');
}

// falsy values
// false, 0, -0, BigInt 0n , "", null , undefined , NaN 

// then all are truthy values
// truthy surprice value 
// "0" , 'false' , " ", [],{},function(){}

if(userEmail.length === 0 ){
     console.log('array is empty');

}


const myObj={}
if(Object.keys(myObj).length === 0 ){
     console.log('object is null');
}
// false == 0
// true
// false == ''
// true