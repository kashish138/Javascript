const user = {
    username: "kashish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${username}`);  // throw error because usko pata hi nhi hai konsa username ki baat ho rhi
        console.log(`Username: ${this.username}`);
        console.log(this);  // it will give the current context sari chize ek sath
    }
}

//agr bhut sare user banane toh sbko alg banane se better hai to use constructor

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this); // global - it will give empty parenthesis


function User(username, loginCount, isLoggedIn){
    this.username = username;  // left vala is variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // likho ya na likho there will be no issue (implicitly define)
}

const userOne = new User("kashish", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)    // values will get overwrite when we print userone - so this is a problem so add new in front of User
//console.log(userOne);
console.log(userOne.constructor);  // reference hota hai khud hi ka
//console.log(userTwo);

// constructor function apko har baar ek naya instance deta hai

// new keyword will create an empty object then a constructor function will get called due to new keyword then this keyword ke andr sb eject ho jate hai or fir we get the desired output

