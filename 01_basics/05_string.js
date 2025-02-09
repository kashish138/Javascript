const name = "kashish"
const repoCount = 50

// console.log(name + repoCount + "Value");  //not a good way

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  //modern way syntax also known as string intopolation

const gameName = new String('kashish-b-com')     //string ek object hai it does not give indexes but gives key value pair

// console.log(gameName[0]);
// console.log(gameName.__proto__);  //syntax

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('i'));   

//learn or read all string methods from mdn

const newString = gameName.substring(0, 4);  // last vali value include nhi hoti
console.log(newString);

const anotherString = gameName.slice(-7, 3) // u can use negative values in slice
console.log(anotherString);

const newStringOne = "   kashish   "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim removes empty spaces

const url = "https://kashish.com/kashish%25bhatia"

console.log(url.replace('%25', '-')); // this replaces the part of string which u want to

console.log(url.includes('kashish')); // we can ask questions too

console.log(gameName.split('-'));  // this will split on the basis of - and convert string to array