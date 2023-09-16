// reduce

const myNums = [1,2,3,4,5]

// real function
// use mdn for refer
// const mytotal = myNums.reduce(function(acc, curValue){
//      console.log(`acc: ${acc} and curValue: ${curValue}`);
//      return acc + curValue
// },0)

// console.log(mytotal);

// using arrow function

// const myTotal = myNums.reduce((acc, curValue)=> acc+curValue, 0)
// console.log(myTotal);

// another eg.

const shoppingCart =[
     {
          itemname:"js",
          price: 2999,
     },
     {
          itemname:"rb",
          price: 2999,
     },
     {
          itemname:"py",
          price: 2999,
     },
     {
          itemname:"mern",
          price: 2999,
     },
]

 const total = shoppingCart.reduce((acc, item)=> acc + item.price ,0)
// item denote karta hai shoppingcart ke har ek object ko
console.log(total); 