const myNums = [1, 2, 3, 4, 5, 6, 7]


// kud hi return kar deta hai
// sab scope ki moh maya hai
// const newNums = myNums.map( (num) => {
//      return num + 10
// })



// chaining chaining chaining chaining chaining chaining 

const newNums = myNums
.map((num) => num * 10)
// map 1 ka result map 2 me pass hogo matlab map 2 mein jo num hai useme map 1 ke num ka result rahega samaj gaye 
.map((num)=> num + 1).filter((num)=> num >= 40)

console.log(newNums);