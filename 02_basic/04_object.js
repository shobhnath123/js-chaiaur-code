// Singaltun


// const tinderUser = new Object()// singalton object

const tinderUser = {} // non singalton object

tinderUser.id = "13456",
tinderUser.name = "shob",
tinderUser.isLoggedInd = false

const regularUser = {
    email: "shodd@mail.com",
    fullName:{
        userfullname:{
            fullname:"sho",
            lastNae:"Nishad"
        }
    }
}

// console.log(regularUser.fullName)
// console.log(tinderUser);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}

// const obj3 = {obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


const users = [{
    id:1,
    email:"h@gmai.com"
}]

// users[1].email;

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))
