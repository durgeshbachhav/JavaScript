const marvelHeroes = ['thor', 'ironman', 'spiderman']
const dc = ['superman', 'batman', 'flash']

// marvelHeroes.push(dc)
// array are not merge array ke ander array ayega
// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allheros = marvelHeroes.concat(dc)
// console.log(allheros);


// spread operator
// eg. glass fodiye spread hojayega

const allNewHeroes = [...marvelHeroes, ...dc]
// console.log(allNewHeroes);

const Another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = Another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("durgesh"));
// console.log(Array.from("durgesh"));
// console.log(Array.from({name: "durgesh"}));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));




