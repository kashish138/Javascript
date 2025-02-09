const score = 400
// console.log(score);

const balance = new Number(100)  //specially defined number
// console.log(balance);

// console.log(balance.toString().length); // string bnne se additional properties add on ho jati hai
// console.log(balance.toFixed(2));  // decimal ke baad fixed digits laana

const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)); // priority decimel se phele mil rhi

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // Indian no ke hissab se 

// MATHS

console.log(Math);  // it is an object

// console.log(Math.abs(-4)); // absolute vale it converts neg value to positive
// console.log(Math.round(4.6)); // it round offs the value
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(4, 3, 5, 8));
// console.log(Math.max(4, 3, 6, 9));

console.log(Math.random()); // it always give value in between 0 and 1
console.log((Math.random()*10 )+ 1); //values get shifted to left but sometimes there are chances of 0so to avoid this we add 1

// TRICK

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)  // min add krne se min value 10 hogyi uske baad output mil rha