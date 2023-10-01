let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = a1.concat(a2);
console.log(a3);
//1 2 3 4 5 6
console.log(a3.includes(10));//false
console.log(a2.indexOf(5));//1
console.log(a3.indexOf(10));//-1(because not present)
console.log('reverse of a3:', a3.reverse());//6 5 4 3 2 1
//slice just make new array 
let a4 = console.log(a3.slice(3));//3 2 1
let a5 = console.log(a3.slice(1, 4));// 1 index to 4 index but 4 not included so 5 4 3 
let a6 = console.log(a3.slice(-3))// eleent from back so 3 2 1 
//splice it just remove or add element in between 
let a7 = [9, 8, 7, 5, 4, 1];
console.log(a7.splice(2, 3, '81', '99'));
console.log(a7.splice(2, 1));

