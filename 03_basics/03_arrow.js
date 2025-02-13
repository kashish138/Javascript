// this keyword refers to current context

const user = {
    username: "kashish",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "gautam"
// user.welcomeMessage()

console.log(this);   // we are inside node environment here this is pointing empty

// ** browser ke andr jo global object hai woh hai window object

// function chai(){ 
//     let username = "kashish"
//     console.log(this);
// }

// chai()   // kaafi values milti hai

// const chai = function(){
//     let username = "kashish"
//     console.log(this.username);
// }
// chai()

// another way to define
const chai = () => {
    let username = "kashish"
    console.log(this.username);
}
chai()

// difference between regular function and arrow function : mostly say that in arrow this function does not prints anything but this is not actually right

// ** pure arrow function

// const addTwo = (num1, num2) => {   // basic arrow function
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// implicit return (no parenthesis used)

const addTwo = (num1, num2) => (num1 + num2) // implicit  curly braces require return keyword but this bracket do not

console.log(addTwo(3, 4))

//** above technique is used in react

// object needs paranthesis otherwies it will not print