const user = {
    username:"shobhnath",
    price:"999",
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`)
    }

}
//  user.welcomeMessage()
//  user.username= "sam"
//  user.welcomeMessage();

// console.log(this)


// function chai(){
//     let username="shobhnath"
//     console.log(this);
// }
// chai();


const chai = () =>{
    let username= "shobhnath"
    console.log(this)
}
// chai()

// const addTwo = (num1+num2) =>{
//     return num1+num2
// }

// console.log(addTwo(3,4))

const addTwo = ( num1, num2)=>(num1 + num2)

console.log(addTwo(2, 4))

const myArray = [2, 5, 3, 7,8]

// myArray.forEach()
// const myArray 