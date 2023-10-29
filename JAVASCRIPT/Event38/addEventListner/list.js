const btn = document.querySelector('#version3');
btn.addEventListener('mouseenter', function () {
    alert("you touched me!! why??");
})

const tas = document.querySelector('#tas');
function twist() {
    console.log("twist");
}
function shout() {
    console.log("shout");
}
//tas.onclick = shout;
//tas.onclick = twist;
//3: twist

tas.addEventListener('click', shout);
tas.addEventListener('click', twist);
//list.js:11 shout
//list.js:8 twist
//list.js:11 shout
//list.js:8 twist
const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');
hello.addEventListener('click', function () {
    console.log("hello");
})
goodbye.addEventListener('click', function () {
    console.log("goodbye");
})