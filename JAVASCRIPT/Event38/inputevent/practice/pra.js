
const input = document.querySelector('#username');
const h1 = document.querySelector('h1');
input.addEventListener('input', function (e) {
    const username = input.value;
    if (username.trim() !== "") {
        h1.innerText = `Welcome, ${username}`;
    } else {
        h1.innerText = "Enter Your Username ";
    }
})