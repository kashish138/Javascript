// Javascript execution context
// jo bhi file bani hai usko js run kese kregi

// {} -> global execution context (refer to this variable)

// js is a single threaded language

// global execution context
// function execution context
// eval execution context

// two phase mein run hota hai
// {} -> memory creation phase and exceution phase

// Example
let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

// steps
// 1. global execution -> this
// 2. memory phase (all variables are combined together and put undefined)
// val1 = undefined
// val2 = undefined
// addnum = defination
// result1 = undefined
// result2 = undefined

// 3. execution phase
// val1 = 10
// val2 = 5
// addnum = alag execution context banega in which it contains new variable environment and execution thread
// for this new execution context we will have memory phase now
// val1 = undefined
// val2 = undefined
// total = undefined
// now excetion phase 
// num1 = 10
// num2 = 5
// total = 15

// jo naya execution bana tha jb uska kaam ho jata it gets deleted