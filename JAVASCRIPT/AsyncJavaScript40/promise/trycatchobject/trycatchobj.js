try {
    let age = prompt("enter your age")
    if (age > 150) {
        throw new ReferenceError("invalid age");
    }

}
catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("script is running");
//ReferenceError
//invalid age
//ReferenceError: invalid ageat trycatchobj.js:4:15
//script is running



//ReferenceError
//trycatchobj.js:6 rahul is not defined
//trycatchobj.js:7 ReferenceError: rahul is not defined