// Immediate Invoked Functions expression IIFE

function chai(){
    console.log(`DB connection`)
}

// Immediately Invoked Functions Expression IIFE

(function chai(){
    console.log(`DB connected`)
})();

((name)=> {
    console.log(`DB CONNECTED ${name}`)
})('SHOBHNATH')
