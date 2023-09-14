// ARRAY

const myArr = [0,1,2,3,4,5,6]
const myHeros = ['ironman','batman','superman']
const myArr2= new Array( 1, 2,3,4,5)
// console.log(myArr[1]);


// methods

// myArr.push(7)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(3));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice , splice

console.log("a ", myArr);

const arr = myArr.slice(1,3)// only 1,2 ayega last value nhi aayegi
console.log(arr);
console.log("b ", myArr);
const arr1 = myArr.splice(1,3); // remove this index portion from original array means manipulate original array
console.log(arr1);
console.log("c ", myArr);
// diff between splice / slice


