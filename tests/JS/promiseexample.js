
// // console.log(`starting of promise example  `)

// // setTimeout(()=>console.log('medium execution'),0)

// // console.log(`ending of promise example  `)

 
// // output // it will print starting of promise example and ending of promise example first 
// // and then medium execution because of event loop and call stack

// // why?   
// // Event Loop
// // 👉 Checks:
// // Is Call Stack empty?
// // ✔️ Yes → move callback to stack




// console.log(`starting of promise example  `)

// Promise.resolve().then(()=>console.log('promise execution')) // Promise goes to microtask queue

// setTimeout(()=>console.log('timeout execution'),0) // it will go to call back queue

// console.log(`ending of promise example  `)

// // microtask que execute first then callback queue


// let promiseExample = new Promise((resolve, reject) => {
//   console.log("Promise is being created");
//   resolve("Promise is resolved");
    
// })

// console.log(promiseExample)
// out put Promise { 'Promise is resolved' }


// let promise2 = new Promise((resolve, reject) => {
//   console.log("Promise is being created");
//   reject("Promise is rejected");
    
// })
//  code: 'ERR_UNHANDLED_REJECTION'

// if promise is resolve then we can use then() function if it faile then () func not execute it will execute catch function

let promise3 = new Promise((resolve, reject) => {
  console.log("Promise is being created");
  reject("Promise is rejected");
// resolve("Promise is resolved")
    
})
promise3.then((res) => console.log(res)).catch((err) => console.log(err))
// output Promise is being created
// Promise is rejected

// A Promise in JavaScript is an object that represents the result of an asynchronous operation
//  (something that takes time, like API calls, file reading, timers, etc.).

// 🔹 Simple Definition

// A Promise is like saying:

// “I will give you the result later — either success or failure.”

// 🔹 States of a Promise

// A Promise has 3 states:

// Pending → Initial state (waiting)
// Fulfilled (Resolved) → Operation successful
// Rejected → Operation failed