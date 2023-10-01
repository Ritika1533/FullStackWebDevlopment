const password = prompt("enter your password");

if (password.length <= 6) {
    console.log("password is too short.Must be 6+ character");
}
else {
    console.log("LONG ENOUGH PASSWORD");
    {
        if (password.indexOf(' ') === -1) {
            console.log("GOOD JOB! NO SPACE VALID PASSWOR")
        }
        else {
            console.log("password can not cointain spaces")
        }
    }
}
