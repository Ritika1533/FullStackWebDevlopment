const password = prompt("enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD")
}
else {
    console.log("INVALID PASSWORD! TRY AGAIN")
}