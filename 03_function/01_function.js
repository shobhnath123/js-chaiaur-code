


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

const result = addTwoNumbers(3, 5);

// console.log("result", result);

function loginUserMessage(username='surya'){
    if(!username){
        console.log("pls enter a user name");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("shobhnath"))
console.log(loginUserMessage())