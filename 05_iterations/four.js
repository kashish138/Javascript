const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United Staes of America")
map.set('Fr', "France")

// for (const key in map) {  // map is not iteratable so it will not run
//     console.log(key);
// }

