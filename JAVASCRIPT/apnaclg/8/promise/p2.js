function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "🧀";
            resolve(cheese);
        }, 2000);
    })
}
function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + "🍙";
            // reject('bd cheese');
            resolve(dough);
        }, 2000);
    })
}
function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            resolve(pizza);
        }, 2000);
    })
}
getCheese()
    .then((cheese) => {
        console.log("here is your cheese", cheese);
        return makeDough(cheese);
    })
    .then((dough) => {
        console.log("here is your dough", dough);
        return bakePizza(dough);
    })
    .then((pizza) => {
        console.log("here your pizzz", pizza);
    })
    .catch((data) => {
        console.log("error occured", data);
    })
    .finally(() => {
        console.log("thanks for coming");
    })