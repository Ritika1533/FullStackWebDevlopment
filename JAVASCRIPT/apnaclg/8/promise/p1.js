let ticket = new Promise(function (resolve, reject) {
    const isBoard = true;
    if (isBoard) {
        resolve("your flight is set to go");
    } else {
        reject("your flight has been cancled");
    }
})
ticket.then((data) => {
    console.log("whooo", data);
}).catch((data) => {
    console.log("ohh noo", data);
}).finally(() => {
    console.log("finally you got your reply");
});