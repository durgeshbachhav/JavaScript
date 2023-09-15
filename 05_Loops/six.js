const coding = ['js', 'py', 'cpp', 'java', 'c', 'rb']


// foreach loop never return value
const values = coding.forEach((item) => {
     // console.log(item);
     return item;
})

// console.log(values);//undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// filter method can return values jo ki foreach nhi karta
// const newNums = myNums.filter((num) => num > 4)
// implicit type return required below expample
// const newNums = myNums.filter((num) => { return num > 4})
// console.log(newNums);


// use forEach

// const newNums = []
// myNums.forEach((num)=>{
//      if(num > 4){
//           newNums.push(num)
//      }
// })

// console.log(newNums);


// eg.
const books = [
     {
          title: "book one",
          genre: 'fiction',
          publish: 1983,
          edition: 2004
     },
     {
          title: "book two",
          genre: 'fantasy',
          publish: 1990,
          edition: 2006
     },
     {
          title: "book three",
          genre: 'mystery',
          publish: 2005,
          edition: 2013
     },
     {
          title: "book four",
          genre: 'science fiction',
          publish: 2012,
          edition: 2019
     },
     {
          title: "book five",
          genre: 'romance',
          publish: 1987,
          edition: 2002
     },
     {
          title: "book six",
          genre: 'thriller',
          publish: 2001,
          edition: 2010
     },
     {
          title: "book seven",
          genre: 'historical fiction',
          publish: 1975,
          edition: 1998
     },
     {
          title: "book eight",
          genre: 'horror',
          publish: 1998,
          edition: 2007
     },
     {
          title: "book nine",
          genre: 'non-fiction',
          publish: 2015,
          edition: 2022
     },
     {
          title: "book ten",
          genre: 'biography',
          publish: 1993,
          edition: 2000
     },
     {
          title: "book eleven",
          genre: 'comedy',
          publish: 2008,
          edition: 2017
     },
     {
          title: "book twelve",
          genre: 'adventure',
          publish: 1989,
          edition: 2001
     },
     {
          title: "book thirteen",
          genre: 'drama',
          publish: 1978,
          edition: 1992
     },
     {
          title: "book fourteen",
          genre: 'poetry',
          publish: 2011,
          edition: 2018
     },
     {
          title: "book fifteen",
          genre: 'self-help',
          publish: 1996,
          edition: 2003
     },
]

//
let userBooks = books.filter((bk)=>{return bk.genre === 'fiction'})
userBooks = books.filter((bk)=>{
     return bk.publish >= 2010 && bk.genre === 'non-fiction'
})

console.log(userBooks);