// reduce js 

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function ( acc, currval) {
//     console.log(`acc ${acc} and currval ${currval}`)
//     return acc + currval;
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)

console.log(myTotal)

const shoppingCart = [
    { 
        itemName: "js course",
        price:199
    },
    { 
        itemName: "mobile course",
        price:299
    },
    { 
        itemName: "php course",
        price:399
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) =>acc + item.price,0)

console.log(priceToPay)