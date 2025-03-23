// Function, array and string all are object prototype and object is null prototype

// let myName = "kashish   "
// let myChannel = "gautam   "

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.kashish = function(){
    console.log(`kashish is present in all objects`);
}

Array.prototype.heyKahish = function(){
    console.log(`Kashish says hello`);
    
}

//heroPower.kashish()

// myHeros.kashish()
// myHeros.heyKahish()
//heroPower.heyKahish()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"kashish".trueLength()