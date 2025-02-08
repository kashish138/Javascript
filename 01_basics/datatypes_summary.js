// Primitive Datatype

// 7 categories : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34567283987544n

// Reference type or Non Primitive Datatype

// Array, Objects, Functions
// curly braces ke andr jo bhi data hai it represent object

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Kashish",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof scoreValue);

// Javascript is Dynamically typed language that is variable types are determined at runtime and you do not need to explicitly declare the type of a variable

// Memory

// Stack (Primitive), Heap (Non Primitive)

let myYoutubeName = "kashishbhatia.com"

let anothername = myYoutubeName
anothername = "chaiaurcode"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "kashish@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// both the value changes in case of object dat (non primitive) because it is using heap that is referencing to the other value
// whereas in case of primitive we use stack and there a copy is made of original and changes are made in copy not in original one