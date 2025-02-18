// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(`Value of num is ${num}`);
}

const greetings = "Hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps
// map is an object that holds key value it has all unique values


const map = new Map()
map.set('IN', "India")
map.set('USA', "United Staes of America")
map.set('Fr', "France")
map.set('Fr', "France")   // it will not print any duplicate values and always print in order

// console.log(map);

for (const key of map) {  // this will print whole array
    // console.log(key);
}

for (const [key, value] of map) { // destructure the array
    // console.log(key, ':-', value);
}

const myObj = {          // object is not iterable
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
