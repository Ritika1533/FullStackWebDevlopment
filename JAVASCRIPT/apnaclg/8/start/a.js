/*
console.log("first");
console.log("second");
setTimeout(() => {
    console.log("hello after 4 second");
}, 4000);
console.log("third");
console.log("fourth");

//callback

function sum(a, b) {
    console.log(a + b);
}
function calculator(a, b, callback) {
    callback(a, b);
}
calculator(2, 3, (a, b) => {
    console.log(a + b);
});
*/
function getData(data) {
    setTimeout(() => {
        console.log("data", data)
    }, 2000);
}