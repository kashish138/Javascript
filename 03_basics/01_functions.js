
function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
}

// sayMyName()   // function execution

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Kashish");        // agr ye return result ke baad hota toh run nhi ho paata
    // return result

    return number1 + number2
}

// addTwoNumbers(3, 4)    // arguments
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

const result = addTwoNumbers(2, 7)

// console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){         // or u can write !username inside parenthesis
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Kashish"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){  // ... here represent rest operator similar to spread 
    return num1
}

// console.log(calculateCartPrice(200, 400, 500)); // it will return only first value to solve this problem rest operator is used

const user = {                   // using object in function
    username: "kashish",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "gautam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]    // using array in an object

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

