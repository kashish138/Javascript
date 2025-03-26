function SetUsername(username){
    // complex Db calls
    this.username = username // ye wala this gayab ho skta hai execution context se isliye niche we have used another this
    console.log("called");
    
}

function createUser(username, email, password){
    SetUsername.call(this, username)       // sirf uska reference hold krke rkhna hai isliye use call function here
    
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")

console.log(chai);
