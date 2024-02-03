let btn1 = document.querySelector("#btn1");
/*
btn1.onclick = () => {
    console.log("hii");
    let a = 9;
    let b = 7;
    console.log(a + b);
}
*/
btn1.addEventListener("click", (evt) => {
    console.log("button is clicked-handler1");
    console.log(evt);
    console.log(evt.type);
})
let handler2 = () => {
    console.log("button is clicked-handler2");
}
btn1.addEventListener("click", handler2);

btn1.removeEventListener("click", handler2);