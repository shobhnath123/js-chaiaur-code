// Array

const myArray = [1, 2, 3, 4, 5];

const myHeros = ["Shivaji", "Krishna", "Rani Laxmi Bai", "Mahatma Gandhi"];
const myArray2 = new Array(1, 2, 3, 4, 5);

console.log(myArray[0])

// Array methods

// myArray.push(6);
// myArray.pop();
// myArray.unshift(9);
// myArray.shift();
// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

const newArr = myArray.join();
console.log("A", newArr); // 1,2,3,4,5


// slice, splice

console.log("B " , newArr);
const mtn1 = myArray.slice(1, 3)

console.log(mtn1)