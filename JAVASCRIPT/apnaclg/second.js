console.log("array");
let marks = [78, 89, 67, 90, 56];
console.log(marks);
console.log(typeof marks);
for (let val of marks) {
    console.log(val);
}
let sum = 0;
for (let val of marks) {
    sum += val;
}
let avg = sum / marks.length;
console.log(`the average marks is ${avg}`);
let i = 0;
let price = [250, 645, 300, 900, 50];
/*
for (let val of price) {
    console.log(`the price at index ${i} is ${val}`);
    let offer = val / 10;
    //val = val - offer;
    //console.log(val);
    price[i] = price[i] - offer;
    console.log(price[i]);
    i++;
}
*/
for (let i = 0; i < price.length; i++) {
    let offers = price[i] / 10;
    price[i] = price[i] - offers;
}
//push pop
console.log(price);
let foodItems = ["patato", "brinjal", "litchi"];
foodItems.push("choclate", "burger");
console.log(foodItems);
console.log(foodItems.pop());
foodItems.toString();
//console.log(foodItems.toString());
console.log(foodItems);
//original remain the same

//concat
let num = [90, 78];
let arratSum = num.concat(foodItems, marks);
console.log(arratSum);

//shift unshift
arratSum.shift();
console.log(arratSum);
arratSum.unshift("abc", "def");
console.log(arratSum);

//slice 
console.log(arratSum.slice(5, 8));
console.log(arratSum);
//splice(start,delete,newelement)
arratSum.splice(3, 3, "newadd");
console.log(arratSum);
