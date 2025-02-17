const userEmail = []

if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Dont have user email");
}

// falsy value
// false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy value
// true, "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1; // jo phele aata vo assign ho jata
// val1 = 5 ?? 10
// val1 = null ?? 10  // agr null aayi toh check krege value hai toh vo assign hogi vrna null
// val1 = undefined ?? 15
val1 = null ?? 10?? 15

console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")