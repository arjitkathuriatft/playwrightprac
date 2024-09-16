var a =1

var a =  2

// we can  redeclare var where as we can not redeclare let

let c = 3

// let c = 4 error
c = 4 //it will work reassigining not redeclaring 

//Data type
// Number, decimal is also number, string, boolean, null,undefined

let x = Array(5);
let b = new Array(2,3,4,2,4)

var d = [12,3,23,4,1];
console.log(d.length)
d.push(5)
console.log(`d is  ${d}`)
d.pop()
console.log(`d is  ${d}`)
d.unshift(5) //it will add at the start
console.log(`d is  ${d}`)

console.log(d.indexOf(5))

// ---TO CHECK IF NUMBER IS IN ARRAY OR NOT

console.log(d.includes(3))

// ---create sub array---
var d = [123,53,723,54,51,5445, 3, 5];

console.log(d.slice(1,5))
//  it will print from 1 index to 4th index