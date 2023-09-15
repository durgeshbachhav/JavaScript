// for loop

// for (let i = 0; i < 10; i++) {
//      const element = i;
//      if(element == 5){
//           console.log('5 is best number');
//      }
//      console.log(element);
     
// }

for (let i = 1; i <= 10; i++) {
     // console.log(`outer loop ${i}`);
     for (let j = 1; j <= 10; j++) {
          // console.log(`inner loop ${j}`);
          // console.log(i + "*" + j + " = " + i*j);
     }
}

let MyArray = ['flash','batman','superman','codeman']
// console.log(MyArray.length);

for (let i = 0; i < MyArray.length; i++) {
     // console.log("My name is "+MyArray[i]);
}

// break and continue

for (let i = 0; i < 10; i++) {
     console.log(`${i}`)    ;
     if(i == 3) {
          // continue
          break;
     };
     
}