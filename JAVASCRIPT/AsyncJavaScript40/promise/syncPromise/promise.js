const ticket = new Promise(function (resolve, reject) {
    const isBoaded = false;
    if (isBoaded) {
        resolve("you are not in the flight");
    }
    else {
        reject("your flight has been cancled");
    }
})

ticket
    .then(function (data) {
        console.log("who hoo" + data);
    })
    .catch(function (data) {
        console.log("ohh noo" + data);
    })
    .finally((data) => {
        console.log("i am always been going to execute");
    })