const duct =
{
    coffee: 8,
    chai: 97,
    biscuit: 7
};
console.log(duct);
duct.chai = 88;//modifing 
console.log(duct);
duct.ci = 91;//adding new element
console.log(duct);

const shoppingCart =
    [
        { product: 'jenga', price: 6.88, quantity: 1 },
        { product: 'echo', price: 8.96, quantity: 3 },
        { product: 'fire stick', price: 4.89, quantity: 7 }
    ];
shoppingCart[0];//{product: 'jenga', price: 6.88, quantity: 1}
shoppingCart[1];//{product: 'echo', price: 8.96, quantity: 3}
shoppingCart[2];//{product: 'fire stick', price: 4.89, quantity: 7}

shoppingCart[1].product;//'echo'
shoppingCart[1].price;//8.96
shoppingCart[1].quantity;//3