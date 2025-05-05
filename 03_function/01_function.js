


function sayMyName(){
    console.log("s");
    console.log("h");
    console.log("o");
    console.log("b");
    console.log("h");
    console.log("n");
}

// sayMyName();

function addTwoNumbers(number1, number2){
  console.log(number1+number2)
//   return(number1+number2)
}

// const result = addTwoNumbers(3, 5);

// console.log("result", result);

function loginUserMessage(username='surya'){
    if(!username){
        console.log("pls enter a user name");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("shobhnath"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500))

const user ={
    username: "shobhnath",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)
}

// handleObject(user)
handleObject({
    name:"shobhnath",
    price:"3000"
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue[200, 400, 500])