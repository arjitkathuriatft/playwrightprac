
// Java script object

let person = {

    name :'Arjit',
    age: '30'

}

console.log(person.name)
console.log(person['age']);

person.gender = 'male'

console.log(person)

delete person.gender
console.log(person)

// gender property check if it is deleted then false
console.log('gender' in person)

for(let key in person){
    console.log(person[key])
}


let person2 = {

    name :'Arjit',
    lastname: 'Kathuria',
    age: '30',
    fullname: function() {
        console.log(this.name +  this.lastname)
    }

}


console.log(person2.fullname())

let person3 = {
    name: 'AK',     
    fummname: () => console.log(this.name),
    rollnp: 30

}