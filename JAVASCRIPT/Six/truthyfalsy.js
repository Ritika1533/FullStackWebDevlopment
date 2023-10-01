const username = prompt("enter your username");

if (username) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY")
}
//if username is there then truthy else falsy
if (0) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY")
}
//here 0 is there which is always false in js so falsy will print
if (false) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY")
}
//falsy
if (null) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY")
}
//it is also falsy
if (NaN) {
    console.log("TRUTHY");
}
else {
    console.log("FALSY")
}
//it is also falsy