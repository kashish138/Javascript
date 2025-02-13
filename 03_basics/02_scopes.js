// let a = 10
// const b = 20
// var c = 30
var c = 300
let a = 40

{}             // curly braces is known as scope

if(true) {       // if ke andr vala part is block scope and bahar vala is global scope
    let a = 10
    const b = 20
    // var c = 30
    console.log("inner: ", a);
}

// for(let i = 0; i < array.length; i++){
//     const element = array[i];
// }

// in both cases scope are different that is in code environment an in inspect window

// console.log(a);
// console.log(b);
// console.log(c);     // c has no problem it will print that is why we ignore var

// nested scope
// in nested function child can acess parent variable

function one(){
    const username = "kashish"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);     // website ka scope andr hi khtm hogya u cant acess it outside

    two()
}
// one()

if(true) {
    const username = "kashish"
    if(username === "kashish"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);  error
}
// console.log(username);     

// *********************** interesting *********************

console.log(addone(5))
function addone(num){             // basic function defination
    return num + 1
}

// below function call before defination wont work beacuse function is defined in another way it is stored in a variable
console.log(addtwo(5))
const addtwo = function(num){      // function know as expression or variable
    return num + 2
}

// above case is also referred to as hoisting