document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt);
})

//-----------------------keyup  and keyup------------------------------------------------------------------------------------------------
const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    console.log('KEYDOWN');
    console.log(e);//all info
})

input.addEventListener('keyup', function () {
    console.log('KEYUP');
})