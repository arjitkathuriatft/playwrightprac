
console.log(a); 
var a = 10;// it will give undefine

// console.log(b);
let b =20; //it will give error because of temporal dead zone

function test(){
    if(true){
        var c = 100;
        let d = 200;
    }
    console.log(c); // it will print 100 because of function scope
    console.log(d); // it will give error because of block scope
}
test()

// clss example

class ABC {
    name;

    constructor(name) {
        this.name = name
    }

    printName(){
        console.log(this.name)
    }   
}

let obj = new ABC("Arjit")
console.log(obj.name)
obj.printName()

