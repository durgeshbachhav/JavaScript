// forEach loop

const coding = ['js', 'py', 'cpp', 'java', 'c', 'rb']


// callback function 
// callback function has no name
coding.forEach(function (item) {
     // console.log(item);
})
// it is regular callback function

coding.forEach((item) => {
     // console.log(item);
})
// useing arrow function

// using reference method
function printMe(item) {
     // console.log(item);
}
// tips
coding.forEach(printMe) // we have only pass reference of the method not calling method


// har baar item hi nhi lata kahi baar dusri value bhi leke aata hai



coding.forEach((item, index, arrList) => { 
     // console.log(item, index, arrList);
})

// [{},{},{}]
const myCoding =[
     {
          name:"sam",
          std:8,
     },
     {
          name:"ram",
          std:6,
     },
     {
          name:"jam",
          std:9,
     },
]

myCoding.forEach((item )=>{
    
     console.log(item.name);
})