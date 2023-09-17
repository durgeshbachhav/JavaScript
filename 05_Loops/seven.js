const myNums = [1, 2, 3, 4, 5, 6, 7]

// The `map` method returns a new array with each element transformed
// In this example, we add 10 to each element of the array
// `map` is chainable, so the result can be passed to another `map` or `filter`
const newNums = myNums
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)

console.log(newNums)
