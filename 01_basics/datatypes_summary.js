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

