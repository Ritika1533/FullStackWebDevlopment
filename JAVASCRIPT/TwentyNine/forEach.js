const animal = ["tiger", "lion", "girraf"];
//---------------------------------------------------------------
animal.forEach(function (value, index) {
    console.log(value, index);
});

//-----------------------------------------------------------------

animal.forEach(function (value, index) {
    console.log(`hey i am ${value} at index ${index}`);
});
//hey i am tiger at index 0
//VM605:2 hey i am lion at index 1
//VM605:2 hey i am girraf at index 2
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
match.forEach(function (match) {
    //console.log(match)
    //{name: 'ritika', score: 70}
    //{name: 'ritik', score: 98}
    console.log(`${match.name}--${match.score}/100`);
})
//ritika--70/100
// ritik--98/100