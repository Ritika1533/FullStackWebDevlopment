const btn = document.querySelector('#v2');
btn.onclick = function () {
    console.log('you clicked me');
    console.log('i hope it worked')
}
function scream() {
    console.log('stay away ');
    console.log('dont touch me');
}
btn.onmouseenter = scream;
document.querySelector('h1').onclick = function () {
    console.log("stop clicking me");
}
