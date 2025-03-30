function User(email, password){
    this._email = email;
    this._password = password
 
    //Earlier syntax 

    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);