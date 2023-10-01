const testScore = {
    Ritika: 90,
    Harsh: 79,
    Ritik: 66,
    aditi: 69,
    mummy: 99,
    papa: 97
};
//we can't use for..of loop to iterate object 
//here for..in loop is used which over the iterable which means two value are there it will give only the key after getting
//key we can get the score

//======================================================================================

for (let person in testScore) {
    console.log(`${person} scored ${testScore[person]}`);
}
//=============another way is Object here we see=========================================

console.log(Object.keys(testScore));
//(6) ['Ritika', 'Harsh', 'Ritik', 'aditi', 'mummy', 'papa'] this will give us the key 

//====================this will give the value=============================================
console.log(Object.values(testScore));
// (6) [90, 79, 66, 69, 99, 97]

//==================== and this will give us the both value and the key====================
console.log(Object.entries(testScore));
//) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// ['Ritika', 90]
// ['Harsh', 79]
// ['Ritik', 66]
//['aditi', 69]
// ['mummy', 99]
// ['papa', 97]


//we will use for..of loop because object funcion giving us the arry so we ccan use for..of to iterate item

for (points of Object.values(testScore)) {
    console.log(points);

    //because Object.values(testScore) is going to give an array then score can titrate 
}


//================total=====================


let total = 0;
for (points of Object.values(testScore)) {
    total = total + points;
}
console.log(`total: ${total}`);


//=============Average========================
total = 0;
let avgNum = (Object.values(testScore)).length;
for (points of Object.values(testScore)) {
    total = total + points;
}
console.log(`AVERAGE: ${total}/${avgNum}`);
console.log(total / avgNum);