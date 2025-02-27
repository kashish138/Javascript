// for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);  // access is not allowed out of the scope

for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}

let myArray = ["flash", "superman", "batman"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}

// break and continue

// break will print till that statement only
// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);
// }

// continue will skip that statement
for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${index}`);
}