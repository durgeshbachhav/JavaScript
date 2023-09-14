// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0); // false
// console.log(null == 0); // false
// console.log(null >= 0); // true reason is below

/*
JavaScript mein, jab aap >= operator ka use karte hain values ko compare karne ke liye jo alag-alag types ke hote hain, jaise null (jo ki object type ka hota hai) aur 0 (jo ki number type ka hota hai), toh JavaScript type coercion ka use karta hai taki comparison meaningful ho sake. Type coercion ek process hai jisme ek ya dono operands ko common data type mein convert kiya jata hai comparison karne se pehle.

Is case mein, null ko number type mein coerce (convert) kiya jata hai aur isse expression effectively 0 >= 0 ho jata hai, jo true hota hai kyunki 0 0 ke barabar hota hai.
*/


// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// all are false because it is undefined

console.log("2" == 2); // true
console.log("2" === 2); // false

/* reason: 
The first comparison (`"2" == 2`) returns `true` because JavaScript performs type coercion, converting the string `"2"` to a number before comparison.

The second comparison (`"2" === 2`) returns `false` because it uses strict equality (`===`), which checks both the value and the data type, and the data types of `"2"` (string) and `2` (number) are not the same.
*/
