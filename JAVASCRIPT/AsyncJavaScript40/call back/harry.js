
//syncronous function
//let a = prompt("hii");
//let b = prompt("i am ");
//let c = prompt("synchronous Function");



//Asynchronous
//let d = console.log("hii i am");
//setTimeout(function () {
//  console.log("Asynchronous function");
//}, 1000);
//let e = console.log("end");


//CALLBACK
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = function () {
        console.log("completely loadedwith src:" + src);
        callback(null, src);
    }
    script.onerror = function () {
        console.log("error occurred with src:" + src);
        callback(new Error("error occurred"), src);
    }
    //setTimeout(function () {
    //   callback1();
    // callback2(src);
    //console.log("settimeout run");
    //}, 2000);
    document.body.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", hello);

function hello(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    console.log("hello world " + src);
}

function goodmorning(error, src) {
    if (error) {
        console.log(error);
        return;
    }
    console.log("goodmorning " + src);
}