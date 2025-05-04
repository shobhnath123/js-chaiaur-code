const name = "shobhnath"
const repoCount =  50

// console.log(name + repoCount + " value") // shobhnath50 value

// console.log(`Hello my name is ${name} ad my repo count is ${repoCount}`);

const gameName = new String('shobhnath')
// console.log(gameName.__proto__); // [String: 'shobhnath']

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(0));


// console.log(gameName.indexOf('n')); // 4

// const newString = gameName.substring(0, 4)
// console.log(newString)



const newStringOne = "   shob  "
console.log(newStringOne);
console.log(newStringOne.trim()); // "shob"


const url = "https://www.google.com/shobhn%2ath"
console.log(url.replace('%2a', '-')); // https://www.google.com/shobhn*th

 console.log(url.includes('shobhn')); 

