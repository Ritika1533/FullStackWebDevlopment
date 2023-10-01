const arr = [10, 20, 30, 40, 50];
const newarr = arr.map(function (value) {
    value = value + 1;
    return value;
});
console.log(arr);
console.log(newarr);
//[10, 20, 30, 40, 50]
//[11, 21, 31, 41, 51]


//****************************************************************************************************************************** */


const match = [
    {
        name: 'ritika',
        score: 70
    },
    {
        name: 'ritik',
        score: 98
    }

];
const title = match.map(function (match) {
    return match.name;
});
title;
//) ['ritika', 'ritik']
const score = match.map(function (match) {
    return match.score;
});
score;
//[70, 98]
//arrow amd implict function
const Score = match.map((match) => (
    match.score
));
Score;


//************************************************************************************************************************************ */


// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [
    { first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }
];

// Write your code here
const firstNames = fullNames.map(function (fullNames) {
    return fullNames.first;
})
console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

//arrow and implict return
const firstnames = fullNames.map((fullNames) => (
    fullNames.first
))
console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']