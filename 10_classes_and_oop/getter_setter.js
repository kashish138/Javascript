class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    // getter simply aapko get krta hai class ke bahar koi value get krni ho isliye getter hota hai and koi value set krni ho inside class uske liye we have setter

    get email(){
        return this._email.toUpperCase()
    }

    //_email or _password has become a private property now 

    set email(value){
        return this._email = value
    }

    get password(){                        // agr get define kiya hai toh set bhi krna hoga and vice versa
        return this._password.toUpperCase()
    }

    // set password(value){       // yha bhi set hori value or constructor mein bhi jiski vjh se call stack limit exceeded error 
    //     this.password = value
    // }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const kashish = new User("kashish@b.ai", "abc")
console.log(kashish.password);
console.log(kashish.email);