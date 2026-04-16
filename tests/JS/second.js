//normal function

function sum(a,b){
    return a+ b
}

let submission = sum(3,4)


// function don't have name
// Anyonyms function

let sumNO = function(c,d)
{
    return c +d
}

// better way

let sumOfNumber = (c,d) => c+d;

console.log(sumOfNumber)


console.log(`======`);
let value = (qq,ww) => {
    console.log(qq + ww) 
    console.log(`fff`)
}

    value(3,4)

var greet = "Afternoon"

if(1==1){
    var greet = "evening"
}

() => {
    var greet = 'morning'
}

console.log(greet)

// it will print evening
// because var scope global/functinal 

// but if we use let everywhere it will print Afternoon
// because ket scope global/block{}



let day = 'tuesday  '

// same as slice(0,4),split("u"),trim(),length

let date = '23'
let nextdate = '27'

let diff = parseIntdate(nextdate) - parseIntdate(date)

console.log(diff)
// ---convert back to String
console.log(diff.toString)



