const array = [1, 2, 3, 4, 5];
// console.log(array);
// console.log(array[3]);
// array.push(9);
// console.log(array);
// const arr = new Array(8, 9, 10);
// console.log(arr);
// arr.push(500, 899, 766);
// arr.pop();
// arr.unshift(600, 45);
// arr.shift();
// console.log(arr);
// console.log(arr.includes(67));
// console.log(arr.indexOf(10));
// //join convert array to string
// const newArray = array.join();
// console.log(array);
// console.log(newArray);
// console.log(typeof newArray); //string

// [ 1, 2, 3, 4, 5 ]
// 4
// [ 1, 2, 3, 4, 5, 9 ]
// [ 8, 9, 10 ]
// [ 45, 8, 9, 10, 500, 899 ]
// false
// 3
// [ 1, 2, 3, 4, 5, 9 ]
// 1,2,3,4,5,9
// string

//SLICE SPLICE
// const a1 = [1, 2, 3, 4, 5, 6];
// const a2 = [1, 2, 3, 4, 5, 6];
// const r1 = a1.slice(1, 4);
// const r2 = a2.splice(1, 4);
// console.log("slice :", a1);
// console.log("slice :", r1);
// console.log("splice :", a2);
// console.log("splice :", r2);
// slice : [ 1, 2, 3, 4, 5, 6 ]
// slice : [ 2, 3, 4 ]
// splice : [ 1, 6 ]
// splice : [ 2, 3, 4, 5 ]
//slice dont change original array
//splice change original array

const marvelHeroes = [
	"Iron Man",
	"Spider-Man",
	"Thor",
	"Hulk",
	"Black Widow",
	"Doctor Strange",
];
const dcHeroes = [
	"Superman",
	"Batman",
	"Wonder Woman",
	"Flash",
	"Aquaman",
	"Green Lantern",
];
// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// [
//     'Iron Man',
//     'Spider-Man',
//     'Thor',
//     'Hulk',
//     'Black Widow',
//     'Doctor Strange',
//     [
//       'Superman',
//       'Batman',
//       'Wonder Woman',
//       'Flash',
//       'Aquaman',
//       'Green Lantern'
//     ]
//   ]

// const allHeros = marvelHeroes.concat(dcHeroes);
// console.log(marvelHeroes);
// console.log(allHeros);
// [
//     'Iron Man',
//     'Spider-Man',
//     'Thor',
//     'Hulk',
//     'Black Widow',
//     'Doctor Strange'
//   ]
//   [
//     'Iron Man',     'Spider-Man',
//     'Thor',         'Hulk',
//     'Black Widow',  'Doctor Strange',
//     'Superman',     'Batman',
//     'Wonder Woman', 'Flash',
//     'Aquaman',      'Green Lantern'
//   ]

//spread
// const allHeroSpread = [...marvelHeroes, ...allHeros, ...array, "abhinav"];
// console.log(allHeroSpread);

//concat Method: Purpose: Combines two or more arrays into a new array.Does Not Modify: Original arrays remain unchanged.Less flexible than the spread operator for certain operations (e.g., inserting into specific positions).
//Spread Operator (...) : Purpose: Expands an array (or iterable) into its individual elements.More flexible; can insert elements in specific positions.
// const str = "Hello";
// const chars = [...str];
// console.log(chars); // ['H', 'e', 'l', 'l', 'o']
///use concat:When combining arrays sequentially without additional logic.If you prefer a method specifically designed for merging arrays.
///Use spread operator:When you need flexibility (e.g., inserting elements in between arrays).When working with iterables like strings, sets, or maps.
