// ============var let diff-===========


var a =1

var a =  2

// we can  redeclare var where as we can not redeclare let

let c = 3

// let c = 4 error
c = 4 //it will work reassigining not redeclaring 

// Hoisting

console.log(a); 
var a = 10;// it will give undefine but not error

// console.log(b);
let ab =20; //it will give reference error because of temporal dead zone

function test(){
    if(true){
        var c = 100;
        let d = 200;
    }
    console.log(c); // it will print 100 because of function scope
    console.log(d); // it will give error because of block scope
}
test()

setTimeout(function(){
    console.log("hello")
}, 1000)

// or

setTimeout(() => console.log("hello"), 1000)


// “let creates a new variable for each iteration of the loop, while var uses the same variable across all iterations.”

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// output 1,2,3

// var shares one variable across all iterations, so async callbacks always see the final value.”

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// output 3,3,3


let aaa = 10;

// {
//   var aaa = 20; // ❌ Error
// }
// illegal shadow

// const x; // it will give error because const must be initialized
const xx = 10; // it will work
// b = 20; // it will give error because we can not reassign const


// ================Data type ================
// Primitive data type
// Number, decimal is also number, string, boolean, null,undefined
console.log("=====Data type ================")
console.log(typeof null) // it will give object but it is a bug in js


let aq = "5";
let bq = 5;

 console.log(aq + bq); // it will give 55 because of type coercion
 console.log(aq - bq); // it will give 0 because of type coercion
 console.log(aq * bq); // it will give 25 because of type coercion
 console.log(aq / bq); // it will give 1 because of type coercion

// to avoid type coercion we can use parseInt or parseFloat
console.log(parseInt(aq) + bq); // it will give 10 because of type coercion
console.log(parseInt(aq) - bq); // it will give 0 because of type coercion
console.log(parseInt(aq) * bq); // it will give 25 because of type coercion
console.log(parseInt(aq) / bq); // it will give 1 because of type coercion

// + is special only operator which can do both addition and concatenation

// console.log("5" + 2 + 3); // it will give 523 because of type coercion
// console.log(2 + 3 + "5"); // it will give 55 because of type coercion


// Non premitive data type
// object Array Function

// “Primitive types store actual values and are immutable, while non-primitive types store references and are mutable.”


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

// console.log(d.includes(3))return true or false

// ---create sub array---
var d = [123,53,723,54,51,5445, 3, 5];

console.log(d.slice(1,5))
//  it will print from 1 index to 4th index

// --how to use reduce

var d = [1,2,3,4];
let total = d.reduce((sum,i)=> sum + i)

console.log(total)

// ---to get even number from array

var e = [1,2,3,4,5,6,7,8]

let evenE = e.filter(e=>e%2==0)
console.log(evenE)

// let's multiply each element with 3

let mapArray = evenE.map(e=>e*3)
console.log(mapArray)

// ---we can chain it as well
// Ques -- find even no array and mul by 3 and find sun

let array = [2,34,3,4,5]

let finalAnswer = array.filter(e=>e%2==0).map(e=>e*3).reduce((sum,e)=> sum + e)
console.log(finalAnswer)


// --sort array
let fruits = ["banana", "apple", "orange", "mango"]

console.log(fruits.sort())
// --it will worl
// if you use 
let array2 = [2,365,7,3,4]
console.log(array2.sort())  //it will also work 

// if you use
// let array3 = [002,365,7,3,4]
// if you use 003, 4 it will not able to sort
// thne you have to usearray.sort((a,b)=> a-b) bubble sort
// console.log(array3.sort())

// ---now literal not allowed like 003, 004
