/*
callback = (cheese) => {
    console.log("here is your cheese");
}
*/
function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("cheese is ready", cheese);
        callback(cheese);
    }, 2000);
}
function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + " 🍙";
        console.log("dough is ready", dough);
        callback(dough);
    }, 2000);
}
function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + " 🍕";
        console.log("pizza is ready", pizza);
        callback(pizza);
    }, 2000);
}
getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("here is your pizzz", pizza);
        })
    })
});