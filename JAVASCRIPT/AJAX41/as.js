


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