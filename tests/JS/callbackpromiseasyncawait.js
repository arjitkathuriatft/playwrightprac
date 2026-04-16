
console.log(`one`);
console.log(`two`);

//i wnat this to be printed after 4 seconds (may be some aoi call anything realistic scenario)
// but if it is synchronous then it will wait for 5 sec and then next part execute which is not the correct way
setTimeout(() => console.log(`four`),4)

console.log(`three`);

// it is a callback function( A call back is a function which passed argument as a other function and 
// it is called when the other function is executed)
    

    // 2nd example

function printName(name){
    console.log(name)
}

function getName(callback){
    let name = "Arjit"
    callback(name)
}
// or
// getName(function(name){
//     console.log(name)
// })

getName(printName)  

// function myCallback() {
//   console.log("Executed later");
// }

// setTimeout(myCallback, 1500);

// ======= call back hell example====
console.log(`call back hell example`)

// now consider that we want function to be call with 2 sec delay

function step1(callback){
    setTimeout(() => {
        console.log(`sep1 is called`)
        callback()
    }, 2000);
}

function step2(callback){
    setTimeout(() => {
        console.log(`step2 is called`)
        callback()
    }, 2000);
}

function step3(callback){
    setTimeout(() => {
        console.log(`step3 is called`)
        callback()
    }, 2000);
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log(`all steps are done`)
        })
})
})

// Promise is for evantual comletion of task and it is used to avoid call back hell

// Promise has 3 state pending resolve/fullfill reject

// now try this with promise3

function stepFirst () {
return new Promise((resolve,reject) => {
    setTimeout(()=> {
        console.log(`step1 is called`),4000
    })
})

}

function stepSecond () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`step2 is called`), 4000
        })
    })
}

function stepThird () {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`step3 is called`), 4000
        })
    })
}

stepFirst().then(() =>stepSecond()).then(()=> stepThird()).then(()=>{
    console.log(`all steps are done`)
})

// promise chaining also not a good option best option async await function

// async function alway returning promise

async function stepAll(){
    await stepFirst()
    await stepSecond()
    await stepThird()
    console.log(`all steps are done`)
}

stepAll()

// it is more readable and easy to understand and it is also more efficient than promise chaining

// await pasuse the execution of function until the promise is resolved or rejected


// async/await is a modern way to handle asynchronous code (like API calls, timeouts, file reading) in a clean and readable way, instead of using .then() chains.

// 🔹 Simple Definition

// async/await = write async code like synchronous code

// 🔹 1. async Function
// When you add async before a function:
// 👉 It always returns a Promise
// async function getData() {
//     return "Hello";
// }

