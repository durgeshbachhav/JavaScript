const myNums = [1, 2, 3, 4, 5]

// The `reduce` method is used to accumulate a single result from an array.
// In this example, we're adding all the numbers in the array.
const myTotal = myNums.reduce((acc, curValue) => acc + curValue, 0)
console.log(myTotal)

const shoppingCart = [
     {
          itemname: "js",
          price: 2999,
     },
     {
          itemname: "rb",
          price: 2999,
     },
     {
          itemname: "py",
          price: 2999,
     },
     {
          itemname: "mern",
          price: 2999,
     },
]

// Here, `reduce` is used to calculate the total price of items in the shopping cart.
const total = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(total)
