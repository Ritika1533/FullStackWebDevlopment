setTimeout(() => {
    console.log("hii i hope i will  run");
}, 1000);


try {
    console.log(value);
}
catch (error) {
    console.log("error is " + error);
}
//this will catch the error

//try {
//    setTimeout(() => {
//        console.log(value);
//    }, 1000);
//}
//catch (error) {
//    console.log("error is " + error);
//}
//this will not catch the error


setTimeout(() => {
    console.log("hii i run");
}, 3000);
//error is ReferenceError: value is not defined
//try.js:2 hii i hope i will  run
//try.js:26 hii i run