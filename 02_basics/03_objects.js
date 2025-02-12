// objects can be declared in two ways : literal and as constructor
// objects are defined in key value pairs
// singleton  - not in case of literals
// Object.create 

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Kashish",
    "full name": "Kashish Bhatia",
    mySym: "mykey1",
    age: 20,
    location: "Faridabad",
    email: "kashishb@gmai.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // not a right way to print
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser.mySym)

JsUser.email = "kashishb25@gmail.com"
//Object.freeze(JsUser)     // freeze ke baad kuch change ni hoga
JsUser.email = "kashishg@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting());