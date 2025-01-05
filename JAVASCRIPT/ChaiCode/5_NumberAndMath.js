//NUMNERS--->> Number.Methods (check this on browser to get more methods)
// const score = 400;
// console.log(score);
// let account = new Number(500);
// console.log(account);
// // account = "abnc"; can do this also
// console.log(account.toString().length);
// console.log(account.toFixed(4)); //500.0000
// let otherNum = 234.7865;
// console.log(otherNum.toPrecision(2)); //2.3e+2
// console.log(otherNum.toPrecision(5)); //234.79
// let hundred = 100000000;
// console.log(hundred.toLocaleString("en-IN"));
// console.log(Number.MAX_VALUE); //methods in number
// console.log(Number.MIN_VALUE);
// console.log(Number); //Function: Number]

//MATH --->> Math.Methods (check this on browser to get more methods)
// console.log(Math);
// console.log(Math.abs(-6));
// console.log(Math.round(7.99));
// console.log(Math.ceil(4.8)); //increase
// console.log(Math.floor(4.8)); //decrease
// console.log(Math.sqrt(9));
// console.log(Math.min(7, 6, 9, 4, 0));
// console.log(Math.max(7, 6, 9, 4, 0));

//RANDOM NUMBER  range 0 - 1
console.log(Math.floor(Math.random() * 100));
const max = 16;
const min = 1;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
