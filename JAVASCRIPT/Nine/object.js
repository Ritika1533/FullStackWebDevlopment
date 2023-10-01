let product = {
    name: 'Gummy Bears',//string
    inStock: true,//bool
    price: 1.99,//number
    flavors: ["grape", "apple", "cherry"],//array
    review: "must buy excellent"
};
//{name:'Gummy Bears', inStock: true, price: 1.99, flavors: Array(3), review: 'must buy excellent'}


//we can access any element like
confirm.log(product.inStock);     //or product['inStock']


//we can modify the things like this
product.price = 2.99;   //or product['price']=2.99
confirm.log(product);
//{name: 'Gummy Bears', inStock: true, price: 2.99, flavors: Array(3), review: 'must buy excellent'}

//we can also add new element
product.country = 'india';
confirm.log(product);
