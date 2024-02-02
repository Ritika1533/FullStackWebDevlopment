function myFunction(msg) {
    console.log("apna collage");
    console.log(`revision ${msg}`);
}
//sum function
myFunction("javascript");
function sumNumber(a, b) {
    return a + b;
}
console.log(sumNumber(7, 8));
//arrow function
const arrowSum = (a, b) => {
    return a + b;
}
console.log(arrowSum(6, 55));
const arrowMulti = (x, y, z) => {
    return x * y * z;
}
console.log(arrowMulti(8, 3, 0));
function countVowel(str) {
    let i = 0
    for (let val of str) {
        if (val === 'a' || val === "A" || val === 'e' || val === "E" || val === 'i' || val === "I" || val === 'o' ||
            val === "O" || val === 'u' || val === "u") {
            i++;
        }

    }
    return i;
}
console.log(countVowel("ritika keshri"));

const arrowVowelCount = (str) => {
    let i = 0
    for (let val of str) {
        if (val === 'a' || val === "A" || val === 'e' || val === "E" || val === 'i' || val === "I" || val === 'o' ||
            val === "O" || val === 'u' || val === "u") {
            i++;
        }
    }
    return i;
}
console.log(arrowVowelCount("nitu devi"));
//foreach loop
let city = ["pune", "hydrabad", "chennai"];
city.forEach((val, index) => {
    console.log(`${val.toUpperCase()} at ${index}`);
});
let number = [1, 2, 3, 4, 5];
let calculateSquare = (val) => {
    console.log(` square of items ${val * val}`);
}
number.forEach(calculateSquare);
//map
let newArray = number.map((val) => {
    val = val % 5;
    return val;
});
console.log(newArray);
//filters
let filterArray = newArray.filter((val) => {
    return val > 1;
});
console.log(filterArray);
