// Singleton 

// objet literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    age:18,
    [mySym]: "mykey1",
    location: "Jaipur",
    email:"shobhnath@googl.com",
    isLoggedIn: false,
    lastLogineDays:["Monday", "Saturday"]
}


// console.log(JsUser.email)

// console.log(JsUser["email"]);

// console.log(JsUser[mySym])


JsUser.email = "shobhnat@gpt.com";

// Object.freeze(JsUser)
JsUser.email = "shobhnath@microsoft.com";

// console.log(JsUser);

JsUser.greeting = function(){
 console.log("Hello js users")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`)
}

console.log(JsUser.greeting())

console.log(JsUser.greetingTwo())