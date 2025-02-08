// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);   //automatically conversion of string to number and then compared
// console.log("02" > 1);

// comparisons convert null to a number treating it as 0 or NaN
console.log(null > 0);  // null is an empty value
console.log(null == 0); // equality works differently in this case
console.log(null >= 0);

console.log(undefined == 0);
//avoid all cases of above comparisons in order to write clean code

// === (strict check)
console.log("2" === 2);