// for of loop

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num)    
// }

const  geetings = "hello world!"

for (const greet of geetings) {
 console.log(`Each char is ${greet}`)   
}

// maps
const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United of america');

// console.log(map)

for(const key of map){
    console.log(key)
}