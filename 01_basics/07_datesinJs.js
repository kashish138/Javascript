// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // Date is an object (imp interview ques)

// let myCreatedDate = new Date(2025, 0, 23);
// console.log(myCreatedDate.toDateString());

let myCreatedDate = new Date("2025-06-14");
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()  // millisecond value
// console.log(myTimeStamp);  
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));     // millisecond to second conversion

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth())

// `${newDate.getDay()} and the time `

newDate.toLocaleDateString('default', {    // customization
    weekday: "long"
})