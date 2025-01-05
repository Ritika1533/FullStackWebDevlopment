"use strict"; //treat all code as a new version
console.log("Ritika Keshri JavaScript Start");
const accId = 5678;
let accEmail = "rittikakes33@gmail.com";
//var dont know about the scope
var accCity = "Kolkata";
let accState = null;
let accNumber;
// accId = 6;
console.log(accId);
//will create table and print
console.table([accCity, accEmail, accId, accNumber, accState]);
// alert("battery low"); we are not using browser
console.log(typeof null); //object
console.log(typeof undefined); //undefined
console.log(typeof NaN); //number

//------------------------TYPECASTING------------------------------------
// let score = "44aa";
// console.log(typeof score);
// let numberScore = Number(score);
// console.log(numberScore);
//take care of that
// let num = null;
// let strNum = Number(num);
// console.log(strNum);

// "33" = 33
// "33agb" = NaN
// "Ritika" = NaN
// "null" = 0
// true = 1 and false = 0

let boolLoggedIn = -1;
let numBoolLoggedIn = Boolean(boolLoggedIn);
console.log(numBoolLoggedIn);
// 1 or any positive any negative => true
//0 => false
//"" => false
//"ghut" => true
