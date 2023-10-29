const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catname');
const list = document.querySelector('#cats');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log("submitted");
    const catName = input.value;
    const newLi = document.createElement('li');
    newLi.innerText = catName;
    console.log(newLi);
    list.append(newLi);
    input.value = "";
})
