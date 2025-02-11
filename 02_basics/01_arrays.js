// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log(myArr[3]);  

// array make shallows copy whose copy shares same reference point (original array mein bhi change hoga)

// Array methods

myArr.push(6)
myArr.pop()           // pop removes last element in array

myArr.unshift(6)     // start mein add on hota (not good)
myArr.shift()        // start se delete hota

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));

const newArr = myArr.join()    //convert it into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    // slice prints a section of array

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)   // last range included is not the right difference it changes original array
console.log("C", myArr);
console.log(myn2);