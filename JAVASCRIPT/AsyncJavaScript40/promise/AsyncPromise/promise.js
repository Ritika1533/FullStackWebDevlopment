function getCheese() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const cheese = "*";
            //console.log("here is your cheese" + cheese);
            resolve(cheese);
        }, 2000);
    });
}
//console.log(getCheese());
function makeDough(cheese) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const dough = "@" + cheese;
            // console.log("here is your dough" + dough);
            resolve(dough);
            // reject("bad cheese");
        }, 2000);
    });
}
function bakePizza(dough) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const pizza = "##" + dough;
            // console.log("here is your pizza" + pizza);
            resolve(pizza);
        }, 2000);
    });
}

//getCheese((cheese) => {
//    makeDough(cheese, (dough) => {
//        bakePizza(dough, (pizza) => {
//            console.log("got the pizza", pizza);
//        })
//    })
//})

getCheese()
    .then((cheese) => {
        console.log("here is your cheese end" + cheese);
        return makeDough(cheese);
    })
    .then((dough) => {
        console.log("here is your dough end " + dough);
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("here is your pizza end " + pizza);
        return bakePizza(pizza);
    })
    .catch((data) => {
        console.log("error occurred " + data);
    })
    .finally(() => {
        console.log("process completed");
    })
