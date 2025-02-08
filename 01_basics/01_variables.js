const accountId = 144553
let accountEmail = "kashish@gmail.com"
var accountPassword = "12345"
accountCity = "Faridabad"

// accountId = 2  //not allowed

accountEmail = "kb25@gmail.com"
accountPassword = "213426"
accountCity = "Delhi"
let accountState;

console.log(accountId);
/* 
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
