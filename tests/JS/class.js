// module.export= class Person{
 class Person{


    age = 25
    firstName;
    lastName


    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName

    }

    // this is proprtty not function
    get location(){
        return "abc"
    }

    // this is function not property
    fullName(){
        console.log(this.firstName + this.lastName)

    }
}


let person = new Person("Arjit", "Kathuria")
console.log(person.age)
console.log(person.location);


person.fullName()

module.exports = {Person};