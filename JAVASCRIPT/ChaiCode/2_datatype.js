//JAVASCRIPT IS DYNAMICALLY KEY TYPE LANGUAGE OR STATIC KEY TYPE LANGUAGE
//Dynamically Typed Languages :  Variables in JavaScript do not have a fixed type. You can assign
//                               any type of value to a variable without specifying its type explicitly.

//data kis tarah se memory me store kia jata  h or hum kis tarah se usko accesss ke sakte h
//on that basic data type are catogarised on that basic into -->primitive and non primitive

//primitive (call by value)--> String number boolean null undefined bigint
//                             symbol(kisi ko v unique bnane ke lie use karage )

let x = 42;
x = "Hello"; // Now x is a string
x = true; // Now x is a boolean

let id = Symbol(345);
let anotherId = Symbol(345);
console.log(id === anotherId); //false

//non premetive and reference type  --> array object functions
let arr = [7, 9];
let obj = {
	name: "ritika",
	age: 23,
};
let funct = function () {
	console.log("function");
};

console.log(typeof arr); //object
console.log(typeof obj); //object
console.log(typeof funct); //object function

//------------------- SUMMARY----------------------
//null       object
//number     number
//string     string
//undefined  undefined
//boolean    boolean
//symbol     symbol
//bigint     bigint
//array      object
//object     object
//function   object
//date       object
