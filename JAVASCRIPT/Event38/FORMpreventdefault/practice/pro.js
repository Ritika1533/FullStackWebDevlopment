const form = document.querySelector('form');
const product = document.querySelector('#product');
const qty = document.querySelector('#qty');
const list = document.querySelector('#list');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const liProduct = product.value;
    const liqty = qty.value;
    const newLi = document.createElement('li');
    newLi.innerText = liqty + " " + liProduct;
    list.append(newLi);
    product.value = " ";
    qty.value = " ";
})
//
//  list.append(liqty);
//console.log("\t");