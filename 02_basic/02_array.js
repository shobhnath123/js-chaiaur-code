const marvl_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// marvl_heros.push(dc_heros);

// marvl_heros.concat(dc_heros)

// console.log(marvl_heros)

const all_new_heros =  [...marvl_heros, ...dc_heros]

// console.log(all_new_heros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anoterh_array = another_array.flat(Infinity)

// console.log(real_anoterh_array);



console.log(Array.isArray("shobhnath"));
console.log(Array.from("shobhnath"));
console.log(Array.from({name: "shobhnath", age: 23})); // empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

// is array , from, of