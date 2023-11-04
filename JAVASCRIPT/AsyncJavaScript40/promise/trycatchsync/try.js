try {
    console.log(value);
}
catch (error) {
    console.log("error is " + error);
}
//this will catch the error

try {
    setTimeout(() => {
        console.log(value);
    }, 1000);
}
catch (error) {
    console.log("error is " + error);
}
//this will not catch the error