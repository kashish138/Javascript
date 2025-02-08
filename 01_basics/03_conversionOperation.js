let score = true

//console.log(typeof score);
//console.log(typeof(score));  //2nd way

let valueInNumber = Number(score) // guarantee that score has been converted to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber); // not a number (NaN)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = "Kashish"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0 = > false
// "" => false
// "kashish" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);