const input = document.querySelector('input');
const h1 = document.querySelector('h1');
//input.addEventListener('change', function () {
//  console.log("changed");
//})
input.addEventListener('input', function (e) {
    console.log('changed');
    h1.innerText = input.value;
})


