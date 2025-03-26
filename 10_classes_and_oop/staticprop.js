class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`); 
    }

    static createId(){  // static access rok deta hai
        return `123`
    }
}

const kashish = new User("kashish")
// console.log(kashish.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const gautam = new Teacher("gautam", "g@saini.com")
gautam.logMe();
console.log(gautam.createId());

