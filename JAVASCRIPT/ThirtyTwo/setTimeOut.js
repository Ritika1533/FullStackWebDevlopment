
//-------------------------setTimeOut-------------------------------

console.log("hellooo");
setTimeout(() => {
    console.log("are you still there???");
}, 3000);
console.log("byeeeee");

//------------------------------setInterval---------------------------
const id = setInterval(() => {
    console.log(Math.random());
}, 2000);
//stop: claerInterval(id);