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
            // resolve(dough);
            reject("bad cheese");
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

//getCheese()
//.then((cheese) => {
//    console.log("here is your cheese end" + cheese);
//   return makeDough(cheese);
//})
//.then((dough) => {
//  console.log("here is your dough end " + dough);
//return bakePizza(dough);
//})
//.then((pizza) => {
//  console.log("here is your pizza end " + pizza);
//return bakePizza(pizza);
//})
//.catch((data) => {
//   console.log("error occurred " + data);
//})
//.finally(() => {
//  console.log("process completed");
//})


//here is your cheese end*
//VM54:53 error occurred bad cheese
//VM54:56 process completed
async function orderPizza() {
    try {
        const cheese = await getCheese();
        console.log("here is your cheese" + cheese);
        const dough = await makeDough(cheese);
        console.log("here is your dough end " + dough);
        const pizza = await bakePizza(dough);
        console.log("here is your pizza end " + pizza);
    }
    catch (error) {
        console.log("error occurred " + error);
    }

}
orderPizza();
//here is your cheese*
//VM58:11 error occurred bad cheese