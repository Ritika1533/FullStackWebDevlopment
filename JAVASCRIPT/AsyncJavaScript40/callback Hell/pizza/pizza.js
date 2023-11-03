function getCheese(callback) {
    setTimeout(() => {
        const cheese = "*";
        console.log("here is your cheese" + cheese);
        callback(cheese);
    }, 2000);
}

function bakeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "@";
        console.log("here is your dough" + dough);
        callback(dough);
    }, 2000);
}
function makePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "$$";
        console.log("here is your pizza" + pizza);
        callback(pizza);
    }, 2000);
}
getCheese((cheese) => {
    console.log("got the cheese" + cheese);
    bakeDough(cheese, (dough) => {
        console.log("got the dough" + dough);
        makePizza(dough, (pizza) => {
            console.log("got my pizza " + pizza);
        });
    });
});

//here is your cheese *
//pizza.js:9 got the cheese*
//pizza.js:20 here is your dough *@
//pizza.js:11 got the dough*@
//pizza.js:27 here is your pizza *@$$
//pizza.js:13 got my pizza *@$$
