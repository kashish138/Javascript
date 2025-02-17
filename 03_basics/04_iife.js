// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log('DB CONNECTED');
// }
// chai()

(function chai(){  
    // named iife                // as learnt in arrow function here we have added a parenthesis 
    console.log('DB CONNECTED');
})();                              // semicolon taki pata ho end kb krna in order to execute next

(function aurcode(){
    console.log('DB CONNECTED TWO');
})();

( (name) => {
    // unamed iife
    console.log('DB CONNECTED TWO ${name}');
})('kashish')

// global scope ke pollution se problem hoti hai sometimes toh to remove it we use iife (function ka immediately execute hona)